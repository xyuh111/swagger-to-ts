const fs = require('fs');
const https = require('http');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const path = require('path');
const dayjs = require('dayjs');

/**
 * 配置项
 * 自定义
 */

// 作者姓名
let __annotationInfo = 'xieyuhui';
// ts 文件目录
let __outputDir = path.resolve(__dirname, './apis');
// request 引入路径
let __requestImport = `import request from "axios"`;

/**
 * 延时
 */
const sleep = (ms = 100) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
//
const R = require('ramda');
module.exports = async ({ annotationInfo, requestImport, outputDir, axiosInterce, remoteUrl, jsonPath }) => {
    __annotationInfo = annotationInfo;
    __requestImport = requestImport;
    __outputDir = outputDir;
    // 目录及公共 interface
    await initDirInterface(axiosInterce);
    // 请求 swagger 获取数据
    let jsonData = await __readFileSync(remoteUrl || jsonPath);
    // 处理数据
    let __dataInfo = __emitData(jsonData);
    jsonData.interfaces = {}; // 接口
    // 生成 respanseParams 接口 和 requestParams 接口
    await __emitInterface(jsonData, __dataInfo);
    await sleep(3000);
    // 生成 ts 网络请求方法
    await __emitMethodsToTs(jsonData, __dataInfo);
    // 输出
    // __mergeAndWrite(fileData)
};
// 初始化目录和公共 interface
function initDirInterface(axiosInterce) {
    rimraf.sync(__outputDir);
    mkdirp.sync(__outputDir);
    fs.writeFileSync(`${__outputDir}/index.ts`, axiosInterce);
}
// 获取 json
function __readFileSync(value) {
    if (R.isNil(value) || R.isEmpty(value)) {
        return new Error('remoteUrl or jsonPath is undefined');
    }
    // 网址判断
    if (/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-\(\)]*[\w@?^=%&/~+#-\(\)])?$/.test(value)) {
        return getJsonByApiDocs(value);
    }
    // 获取本地json
    return getJsonByTestDocs(value);
}
// 使用测试 json 数据
function getJsonByTestDocs(value) {
    return new Promise((resolve, reject) => {
        // 测试 json 文件
        let jsonObj = R.tryCatch(JSON.parse, null)(fs.readFileSync(value, 'utf8'));
        if (jsonObj) {
            resolve(jsonObj);
        }
    });
}
// 使用接口数据
function getJsonByApiDocs(swaggerUrl) {
    return new Promise((resolve, reject) => {
        // 'http://xxxx.xxx:80/web-api/v2/api-docs'.match(/^(https?:\/\/)?([\w-]+(\.[\w-]+)+):?((?<=:)\d{1,5})*(\/.*)/)
        //  ['http://xxxx.xxx:80/web-api/v2/api-docs', 'http://', 'xxxx.xxx', '.107', '80', '/web-api/v2/api-docs']
        let swaggerUrlArr = swaggerUrl.match(/^(https?:\/\/)?([\w-]+(\.[\w-]+)+):?((?<=:)\d{1,5})*(\/.*)/);
        let jsonStr = '';
        let hostname = swaggerUrlArr[2],
            port = swaggerUrlArr[4] || 80,
            path = swaggerUrlArr[5] || '/';
        const req = https.request(
            {
                hostname,
                port,
                path,
                method: 'GET'
            },
            (res) => {
                if (res.statusCode === 200) {
                    res.on('data', (d) => {
                        jsonStr += d;
                    });
                    res.on('end', () => {
                        console.log('end');
                        let jsonObj = R.tryCatch(JSON.parse, null)(jsonStr);
                        if (jsonObj) {
                            resolve(jsonObj);
                        }
                    });
                }
            }
        );
        req.on('error', (error) => {
            console.error(error);
        });
        req.end();
    });
}
// 处理数据
function __emitData(jsonData) {
    let obj = {};
    let dataApis = jsonData.tags.map((it) => {
        let paths = jsonData.paths;
        // api 文件名称
        let ApiFileName = it.description.replace(' Controller', '').replace(/\s/gi, '').replace(it.description[0], it.description[0].toLowerCase());
        Object.keys(paths).forEach((apiPath) => {
            let request = null;
            if (paths[apiPath].post) {
                request = paths[apiPath].post;
                paths[apiPath].request = { ...paths[apiPath].post, type: 'post' };
            } else if (paths[apiPath].get) {
                request = paths[apiPath].get;
                paths[apiPath].request = { ...paths[apiPath].get, type: 'get' };
            }
            // 判断撇杠结尾
            if (R.equals(R.last(apiPath), '/')) {
                // 撇杠结尾的 api 一般是后端没有处理的 bug
                return;
            }
            if (request && request.tags && request.tags.indexOf(it.name) != -1) {
                if (!obj[ApiFileName]) {
                    obj[ApiFileName] = [];
                }
                if (!request.parameters) {
                    request.parameters = [];
                }
                // 方法名
                let methodName = apiPath
                    .replace(/^\//, '')
                    .replace(/\/\w/g, (value) => value.replace(/^\//, '').toUpperCase())
                    .replace(/\/\{.*}\/*/g, '');
                let body = request.parameters.find((it) => it.in === 'body') || '';
                // body ref
                if (body) {
                    body.ref = R.pathOr('', ['schema', '$ref'], body).replace(/.*\//g, '');
                    body.itemRef = R.pathOr('', ['schema', 'items', '$ref'], body).replace(/.*\//g, '');
                }
                obj[ApiFileName].push({
                    method: paths[apiPath].request.type,
                    fileName: ApiFileName,
                    mapName: it.name,
                    summary: request.summary,
                    description: request.description ? (request.description == request.summary ? '' : request.description) : '',
                    methodName: methodName,
                    url: apiPath,
                    paths: request.parameters.filter((it) => it.in === 'path'), // path 传参
                    body: body, // body 传参
                    formData: request.parameters.filter((it) => it.in === 'formData'), // formData 传参
                    query: request.parameters.filter((it) => it.in === 'query'), // query 传参
                    responsesType: R.pathOr('', ['200', 'schema', 'type'], request.responses).replace(/.*\//g, ''), // 响应参数类型
                    responsesRef: R.pathOr('', ['200', 'schema', '$ref'], request.responses).replace(/.*\//g, '') // 返回参数
                });
            }
        });
    });
    return obj;
}
// 生成接口
function __emitInterface(jsonData, __dataInfo) {
    return new Promise(async (resolve, reject) => {
        let __fnInterface = {
            resInterfaceKey: {}, // 记录返回名称
            reqInterfaceKey: {} // 记录请求名称
        };
        let definitions = jsonData.definitions;
        R.mapObjIndexed(async (value, key, obj) => {
            // await sleep()
            __fnInterface[key] = {
                req: [], // 请求接口
                res: [],
                interfaceName: []
            };
            if (!R.isNil(value) && !R.isEmpty(value)) {
                let params = value.map(async (it) => {
                    await sleep(50);
                    // 处理请求参数
                    let __req = await __requestParams(it, key, definitions, __fnInterface);
                    // 处理响应体
                    let __res = await __responseParams(it, key, definitions, __fnInterface);
                });
            }
        }, __dataInfo);
        jsonData.interfaces = __fnInterface;
        await sleep(500)
        let reqInterfaceKey = await R.mapObjIndexed((v, k, o) => {
            let __v = v.map(it =>  `${it.name}: ${it.interName}${it.type}`)
            let p__v = v.map(it => {
                if (!it.params) {
                    return null
                }
                return `,\n        ${it.params}`
            }).filter(Boolean)
            return {
                params: p__v.join(""), // 实参
                __params: __v.join(", "), // 形参
            };
        }, __fnInterface.reqInterfaceKey)
        // console.log(reqInterfaceKey)
        __fnInterface.reqInterfaceKey = reqInterfaceKey
        // __mergeAndWrite("reqInterfaceKey", JSON.stringify(reqInterfaceKey))
        resolve();
    });
}

// 生成请求方法 ts
function __emitMethodsToTs(jsonData, __dataInfo) {
    R.mapObjIndexed((value, key, obj) => {
        let newRequestImport = __requestImport
        if (!jsonData.interfaces.resInterfaceKey[key + 'isBase']) {
            newRequestImport = newRequestImport.replace(/IBase\s?,/g, '')
        }
        if (!jsonData.interfaces.resInterfaceKey[key + 'isBasePage']) {
            newRequestImport = newRequestImport.replace(/IBasePage\s?,?/g, '')
        }
        if (!jsonData.interfaces.resInterfaceKey[key + 'isConverFormData']) {
            newRequestImport = newRequestImport.replace(/,?\s*converFormData/g, '')
        }
        /**
         * 作者信息
         * */
        let annotationInfo = __annotationInfo.replace()
            .replace('{Title}', value[0].fileName)
            .replace('{description}', value[0].mapName)
            .replace('{date}', dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'));
        // 拼接作者信息 和 引入响应 interface
        let jsonStr = `${annotationInfo}\n${newRequestImport}\n`;

        let interfaceStr = jsonData.interfaces[key].req.join('');
        if (interfaceStr) {
            jsonStr += `/*\n * 请求接口\n*/${interfaceStr}`;
        }
        let interfaceStrRes = jsonData.interfaces[key].res.join('');
        if (interfaceStrRes) {
            jsonStr += `/*\n * 响应接口\n*/${interfaceStrRes}`;
        }
        value.forEach((it) => {
            // path 参数
            let pathStr = it.paths.length > 0 ? it.paths.map((pathObj) => `${pathObj.name}: ${pathObj.type == 'integer' ? 'number' : 'string'}`).join(', ') : '';
            pathStr && (pathStr = `{${pathStr}}`);
            let resInterType = jsonData.interfaces.resInterfaceKey[it.methodName + 'type'] || '';
            let resInterName = jsonData.interfaces.resInterfaceKey[it.methodName];
            // 请求参数
            // 实参
            let requestParamsData = '';
            // 形参
            let __requestParamsData = '';
            if (jsonData.interfaces.reqInterfaceKey[it.methodName]) {
                __requestParamsData = jsonData.interfaces.reqInterfaceKey[it.methodName].__params
                requestParamsData = jsonData.interfaces.reqInterfaceKey[it.methodName].params
            }
            // 请求参数中有文件有上传文件
            if (it.formData.length) {
                if (R.find(R.equals(R.propEq('type', 'file')), it.formData)) {
                    __requestParamsData += `, onUploadProgress?: (progressEvent: any) => void`;
                    requestParamsData += `,\n        /* 监听上传进度 */\n        onUploadProgress: onUploadProgress`;
                }
            }
            jsonStr += `
/**  
 * @description ${it.summary}${it.description ? ` -- ${it.description}` : ''}
*/
export function ${it.methodName}(${__requestParamsData}): Promise<${resInterType ? 'IBasePage' : 'IBase'}<${resInterName}${resInterType}>> {
    return request({
        method: '${it.method.toUpperCase()}',
        url: \`${it.url.replace(/\{/g, '${__path.')}\`${requestParamsData}
	});
}\n`;
        });
        process.nextTick(() => {
            __mergeAndWrite(value[0].fileName, jsonStr);
        });
    }, __dataInfo);
}
// 输出
function __mergeAndWrite(fileName, jsonStr) {
    /**
     * 文件名添加 Server 后缀
     */
    fs.writeFile(`${__outputDir}/${fileName}Server.ts`, jsonStr, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        //文件写入成功。
        console.log(`文件写入成功: ${__outputDir}/${fileName}.ts`);
    });
}

// 处理请求参数
function __requestParams(it, key, definitions, __fnInterface, interfaceName = '', requestParams = {}) {
    let newInterfaceName = interfaceName;
    if (!newInterfaceName) {
        newInterfaceName = `I${R.replace(/^\w{1}/, R.toUpper)(it.methodName)}`;
    }
    
    // interfaceName = undefined 说明取值 body、params、paths
    if (!interfaceName) { // 请求体，第一层判断
        //区分 query（axios >> params）、formdata（axios >> data）、body（axios >> data） 
        /**
         * 有 formData 肯定没有 body，
         */

        if (!R.isNil(it.formData) && !R.isEmpty(it.formData)) {
            let __newInterfaceName = newInterfaceName + "FormData"
            let requestFormData = R.indexBy(R.prop('name'), it.formData);
            if (requestFormData && !R.isEmpty(requestFormData)) {
                __fnInterface.resInterfaceKey[key + 'isConverFormData'] = true
                if (!__fnInterface.reqInterfaceKey[it.methodName]) {
                    __fnInterface.reqInterfaceKey[it.methodName] = []
                }
                __fnInterface.reqInterfaceKey[it.methodName].push({
                    params: "data: converFormData(<{ [k: string]: string | Blob }>data)",
                    name: "data",
                    interName: __newInterfaceName,
                    required: false,
                    type: ''
                })
                // 递归执行
                __requestParams(it, key, definitions, __fnInterface, __newInterfaceName, requestFormData)
            }
            
        } else if (!R.isNil(it.body) && !R.isEmpty(it.body)) {
            let a_type = ''
            let __newInterfaceName = newInterfaceName + "Body"
            let bodyParams = {};
            if (R.path(['body', 'ref'], it)) {
                let definitionsItem = definitions[it.body.ref]
                bodyParams = definitionsItem ? definitionsItem.properties : {};
            } else if (R.path(['body', 'itemRef'], it)) {
                let definitionsItem = definitions[it.body.itemRef]
                bodyParams = definitionsItem ? definitionsItem.properties : {};
                a_type = '[]'
            } else {
                let s_type = R.replace('integer', 'number', R.pathOr('', ['body', 'schema', 'type'], it))
                // 判断 body 类型为基本类型，或 body 为数组类型，元素为基本类型
                if (s_type == "array") {
                   let type = R.replace('integer', 'number', R.pathOr('', ['body', 'schema', 'items', 'type'], it))
                   s_type = type ? `${type}[]` : 'any'
                }
                it.body.__isTypes = true
                it.body.__type = s_type
                bodyParams = it.body
                it.body = null
            }
            if (bodyParams && !R.isEmpty(bodyParams)) {
                if (!__fnInterface.reqInterfaceKey[it.methodName]) {
                    __fnInterface.reqInterfaceKey[it.methodName] = []
                }
                __fnInterface.reqInterfaceKey[it.methodName].push({
                    params: "data: data",
                    name: "data",
                    interName: __newInterfaceName,
                    required: R.pathOr(false, ['body', 'required'], it),
                    type: a_type
                })
                // 递归执行
                __requestParams(it, key, definitions, __fnInterface, __newInterfaceName, bodyParams)
            }
        }
        /**
         * path 参数
         */
        if (!R.isNil(it.paths) && !R.isEmpty(it.paths)) {
            let requestPath = R.indexBy(R.prop('name'), it.paths);
            let __newInterfaceName = newInterfaceName + "Path"
            if (requestPath && !R.isEmpty(requestPath)) {
                if (!__fnInterface.reqInterfaceKey[it.methodName]) {
                    __fnInterface.reqInterfaceKey[it.methodName] = []
                }
                __fnInterface.reqInterfaceKey[it.methodName].push({
                    params: "",
                    name: "__path",
                    interName: __newInterfaceName,
                    required: false,
                    type: ''
                })
                // 递归执行
                __requestParams(it, key, definitions, __fnInterface, __newInterfaceName, requestPath)
            }
         }
         /**
          * query 参数
          */
        if (!R.isNil(it.query) && !R.isEmpty(it.query)) {
            let __newInterfaceName = newInterfaceName + "Params"
            let requestQuery = R.indexBy(R.prop('name'), it.query);
            if (requestQuery && !R.isEmpty(requestQuery)) {
                if (!__fnInterface.reqInterfaceKey[it.methodName]) {
                    __fnInterface.reqInterfaceKey[it.methodName] = []
                }
                __fnInterface.reqInterfaceKey[it.methodName].push({
                    params: "params: query",
                    name: "query",
                    interName: __newInterfaceName,
                    required: false,
                    type: ''
                })
                // 递归执行
                __requestParams(it, key, definitions, __fnInterface, __newInterfaceName, requestQuery)
            }
        }

    } else { 
        // body 下的对象或数组 ref
        it.ref && (requestParams = R.mergeAll(definitions[it.ref].properties));
    }
    //
    if (requestParams && !R.isEmpty(requestParams)) {
        // 同一个 ts 文件 interface 去重
        if (__fnInterface[key].interfaceName.indexOf(newInterfaceName) !== -1) {
            return;
        }
        __fnInterface[key].interfaceName.push(newInterfaceName);
        // 生成 type 接口
        if (requestParams.__isTypes && requestParams.in === "body") {
            let interfaceParamsStr = `\nexport type ${newInterfaceName} = ${requestParams.__type};\n`;
            __fnInterface[key].req.push(interfaceParamsStr);
            return 
        }
        // 生成 interface
        let interfaceParamsStr = `\nexport interface ${newInterfaceName} {\n`;
        
        // 
        let __obj = {}
        R.forEachObjIndexed((v, k, o) => {
            let o_ref = R.pathOr('', ['$ref'], v).replace(/.*\//g, ''); // 返回数据为对象
            let a_ref = R.pathOr('', ['items', '$ref'], v).replace(/.*\//g, ''); // 返回数据为数组
            if (o_ref) {
                // 对象
                let childInterName = `I${R.replace(/^\w{1}/, R.toUpper)(k)}`;
                interfaceParamsStr += `    ${k}: ${childInterName}, /* ${v.description || ''}  ${v.format || ''}*/ \n`;
                let __res = __requestParams({ ref: o_ref, methodName: it.methodName }, key, definitions, __fnInterface, childInterName);
                return;
            } else if (a_ref) {
                // 数组
                let childInterName = `I${R.replace(/^\w{1}/, R.toUpper)(k)}`;
                interfaceParamsStr += `    ${k}: ${childInterName}[], /* ${v.description || ''}  ${v.format || ''}*/ \n`;
                let __res = __requestParams({ ref: a_ref, methodName: it.methodName }, key, definitions, __fnInterface, childInterName);
                return;
            } else {
                // 基础数据类型
                let __sType = getDataTypes(k, v);
                // productSymptomList[0].proSymId 兼容后端这种不规范的 key
                if (k.split('[0].')[1]) {
                    // console.log(k)
                    if (!__obj[k.split('[0].')[0]]) {
                        __obj[k.split('[0].')[0]] = `    ${k.split('[0].')[0]}?: {\n`
                    }
                    __obj[k.split('[0].')[0]] += `        ${k.split('[0].')[1]}: ${__sType}; /* ${(v.description || '').replace(/\*/g, '')}  ${(v.format || '').replace(/\*/g, '')}*/ \n`;
                    return 
                }
                interfaceParamsStr += `    ${k}${v.required ? __sType === 'Blob' ? '?':'' : '?'}: ${__sType}; /* ${(v.description || '').replace(/\*/g, '')}  ${(v.format || '').replace(/\*/g, '')}*/ \n`;
                return;
            }
        }, requestParams);
        R.forEachObjIndexed(async (v, k, o) => {
            v += `    }[];\n`
            interfaceParamsStr += v
        }, __obj)
        interfaceParamsStr += '}\n';
        __fnInterface[key].req.push(interfaceParamsStr);
        it.reqInterfaceName = newInterfaceName;
    }
}

// 处理响应参数
function __responseParams({ responsesRef, methodName, responsesType }, key, definitions, __fnInterface, interfaceName = '') {
    let newInterfaceName = interfaceName;
    if (!newInterfaceName) {
        newInterfaceName = `I${R.replace(/^\w{1}/, R.toUpper)(methodName)}Response`;
    }
    let resParams = R.pathOr([], [responsesRef, 'properties'])(definitions);
    /**
     * IBase 中的 datas 属性
     */
    if (!interfaceName) {
        let o_ref = R.pathOr('', ['datas', '$ref'], resParams).replace(/.*\//g, ''); // 返回数据为对象
        let a_ref = R.pathOr('', ['datas', 'items', '$ref'], resParams).replace(/.*\//g, ''); // 返回数据为数组
        // 判断 ref 指向的集合为空  interfaceName 表示第一级
        if ((a_ref || o_ref) && !R.isNil(resParams) && !R.isEmpty(resParams)) {
            __fnInterface.resInterfaceKey[methodName] = newInterfaceName;
            __fnInterface.resInterfaceKey[methodName + 'type'] = a_ref ? '[]' : ''; // 数组 | 对象
            o_ref && (__fnInterface.resInterfaceKey[key + 'isBase'] = true)
            a_ref && (__fnInterface.resInterfaceKey[key + 'isBasePage'] = true)
            let __res = __responseParams({ responsesRef:  a_ref || o_ref, methodName }, key, definitions, __fnInterface, newInterfaceName);
            return;
        } else {
            // 无返回 ****s
            let __sType = getDataTypes(null, { type: responsesType });
            __fnInterface.resInterfaceKey[key + 'isBase'] = true
            __fnInterface.resInterfaceKey[methodName] = __sType;
            return;
        }
    }
    // 同一个 ts 文件 interface 去重
    if (__fnInterface[key].interfaceName.indexOf(newInterfaceName) !== -1) {
        return;
    }
    __fnInterface[key].interfaceName.push(newInterfaceName);
    /**
     * 嵌套对象
     */
    let interfaceParamsStr = `\nexport interface ${newInterfaceName} {\n`;
    let __obj = {}
    R.forEachObjIndexed(async (v, k, o) => {
        let o_ref = R.pathOr('', ['$ref'], v).replace(/.*\//g, ''); // 返回数据为对象
        let a_ref = R.pathOr('', ['items', '$ref'], v).replace(/.*\//g, ''); // 返回数据为数组
        // 判断 ref 执行的集合是否为空
        const hasNewInterface = R.path([o_ref || a_ref, 'properties'])(definitions)
        if ((a_ref || o_ref) && !R.isNil(hasNewInterface) && !R.isEmpty(hasNewInterface)) {
            // 数组  // 对象
            let childInterName = `I${R.replace(/^\w{1}/, R.toUpper)(k)}`;
            interfaceParamsStr += `    ${k}: ${childInterName}${a_ref? "[]" : ""}, /* ${v.description || ''}  ${v.format || ''}*/ \n`;
            let __res = __responseParams({ responsesRef:  a_ref || o_ref, methodName }, key, definitions, __fnInterface, childInterName);
            return;
        } else {
            // 基础数据类型
            let __sType = getDataTypes(k, v);
            // productSymptomList[0].proSymId 兼容后端这种不规范的 key
            if (k.split('[0].')[1]) {
                if (!__obj[k.split('[0].')[0]]) {
                    __obj[k.split('[0].')[0]] = `    ${k.split('[0].')[0]}?: {\n`
                }
                __obj[k.split('[0].')[0]] += `        ${k.split('[0].')[1]}: ${__sType}; /* ${(v.description || '').replace(/\*/g, '')}  ${(v.format || '').replace(/\*/g, '')}*/ \n`;
                return 
            }
            interfaceParamsStr += `    ${k}${v.required ? '' : '?'}: ${__sType}; /* ${(v.description || '').replace(/\*/g, '')}  ${(v.format || '').replace(/\*/g, '')}*/ \n`;
            return;
        }
    }, resParams);
    R.forEachObjIndexed(async (v, k, o) => {
        v += `    }[];\n`
        interfaceParamsStr += v
    }, __obj)
    interfaceParamsStr += '}\n';
    __fnInterface[key].res.push(interfaceParamsStr);
}

// 基本数据类型处理，没有 ref 的对象及数组
function getDataTypes(_k, v) {
    let __sType = v.type && v.type.replace('integer', 'number');
    if (['number', 'string', 'boolean'].indexOf(__sType) === -1) {
        __sType = 'any';
        // 数组类型
        if (v.type === 'array' && ['number', 'integer', 'string', 'boolean'].indexOf(R.path(['items', 'type'], v)) > -1) {
            __sType = v.items.type.replace('integer', 'number');
            return __sType ? `${__sType}[]` : 'any';
        }
        // 文件类型
        if (v.type === 'file') {
            return 'Blob';
        }
    }
    return __sType;
}