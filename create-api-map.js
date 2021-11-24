const fs = require('fs')
const https = require('http')
const rimraf = require("rimraf");
const mkdirp = require("mkdirp");
const path = require("path")

/** 
 * 配置项
 * 自定义
*/
// ts 文件目录
const __fileDir = path.join(__dirname, 'apis')
// 配置正确的 json 接口
const swaggerUrl = 'http://xxxx.xxx/web-api/v2/api-docs' 
// const swaggerUrl = 'http://xxxx.xxx:8000/web-api/v2/api-docs' // 
// request 引入路径 
const reqestFrom = `import request from "axios"`

/** 
 * 延时
*/ 
const sleep = (ms = 100) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 *
 * 定义公共响应体的 interface 
 * 
*/ 
let responseBase = `
export interface IBase<T> {
	code: number; /* 状态码 */
	datas: T;     /* 返回结果 */
	message: string; /* 返回消息 */
	status: string;  /* 返回值(S/F) */
}
`
let respanseBasePage = `
export interface IBasePage<T> {
	code: number;    
	count: boolean;
	datas: T;       /* 返回结果 */
	endRow: number;
	message: string;
	page: number;
	pageNum: number;
	pageSize: number;
	pages: number;
	startRow: number;
	status: string;
	total: number;    /* 总行数 */
	totalSize: number;/* 总行数 */
}
`
//
const R = require('ramda')
	; (async () => {
		// 目录及公共 interface
		await initDirInterface()
		// 请求 swagger 获取数据
		let jsonData = await __readFileSync()
		// 处理数据
		let __dataInfo = __emitData(jsonData)
		jsonData.interfaces = {} // 接口
		// 生成 respanseParams 接口 和 requestParams 接口
		await __emitInterface(jsonData, __dataInfo)
		await sleep(3000)
		// 生成 ts 网络请求方法
		await __emitMethodsToTs(jsonData, __dataInfo)
		// 输出
		// __mergeAndWrite(fileData)
	})();
// 初始化目录和公共 interface
async function initDirInterface() {
	rimraf.sync(__fileDir)
	await sleep()
	mkdirp.sync(__fileDir)
	fs.writeFileSync(`${__fileDir}/index.d.ts`, responseBase + respanseBasePage)
}
// 获取 json
function __readFileSync() {
	// swagger 接口获取 json
	// return getJsonByApiDocs()
	// 获取本地测试 json
	return getJsonByTestDocs()
}
// 使用测试 json 数据
function getJsonByTestDocs() {
	return new Promise((resolve, reject) => {
		// 测试 json 文件
		let jsonObj = R.tryCatch(JSON.parse, null)(fs.readFileSync('./swagger-api-docs.json', 'utf8'))
		if (jsonObj) {
			resolve(jsonObj)
		}
	})
}
// 使用接口数据
function getJsonByApiDocs() {
	return new Promise((resolve, reject) => {
		// 'http://xxxx.xxx:80/web-api/v2/api-docs'.match(/^(https?:\/\/)?([\w-]+(\.[\w-]+)+):?((?<=:)\d{1,5})*(\/.*)/)
		//  ['http://xxxx.xxx:80/web-api/v2/api-docs', 'http://', 'xxxx.xxx', '.107', '80', '/web-api/v2/api-docs']
		let swaggerUrlArr = swaggerUrl.match(/^(https?:\/\/)?([\w-]+(\.[\w-]+)+):?((?<=:)\d{1,5})*(\/.*)/)
		let jsonStr = "";
		let hostname = swaggerUrlArr[2], port = swaggerUrlArr[4] || 80, path = swaggerUrlArr[5] || "/";
		const req = https.request({
			hostname, port, path, method: 'GET'
		}, res => {
			if (res.statusCode === 200) {
				res.on('data', d => {
					jsonStr += d
				})
				res.on('end', () => {
					console.log('end')
					let jsonObj = R.tryCatch(JSON.parse, null)(jsonStr)
					if (jsonObj) {
						resolve(jsonObj)
					}
				})
			}
		})
		req.on('error', error => {
			console.error(error)
		})
		req.end()
	})
}
// 处理数据
function __emitData(jsonData) {
	let obj = {}
	let dataApis = jsonData.tags.map(it => {
		let paths = jsonData.paths
		// api 文件名称
		let ApiFileName = it.description.replace(" Controller", "").replace(/\s/ig, "").replace(it.description[0], it.description[0].toLowerCase())
		Object.keys(paths).forEach(apiPath => {
			let request = null
			if (paths[apiPath].post) {
				request = paths[apiPath].post
				paths[apiPath].request = { ...paths[apiPath].post, type: 'post' }
			} else if (paths[apiPath].get) {
				request = paths[apiPath].get
				paths[apiPath].request = { ...paths[apiPath].get, type: 'get' }
			}
			// 判断撇杠结尾
			if (R.equals(R.last(apiPath), '/')) {
				// 撇杠结尾的 api 一般是后端没有处理的 bug
				return
			}
			if (request && request.tags && request.tags.indexOf(it.name) != -1) {
				if (!obj[ApiFileName]) {
					obj[ApiFileName] = []
				}
				if (!request.parameters) {
					request.parameters = []
				}
				// 方法名
				let methodName = apiPath.replace(/^\//, '').replace(/\/\w/g, value => value.replace(/^\//, '').toUpperCase()).replace(/\/\{.*}\/*/g, '')
				let body = request.parameters.find(it => it.in === 'body') || ''
				// body ref
				if (body) {
					body.ref = R.pathOr(R.pathOr('', ['schema', 'items', '$ref'], body), ['schema', '$ref'], body).replace(/.*\//g, '')
				}
				obj[ApiFileName].push({
					method: paths[apiPath].request.type,
					fileName: ApiFileName,
					mapName: it.name,
					summary: request.summary,
					description: request.description ? request.description == request.summary ? '' : request.description : '',
					methodName: methodName,
					url: apiPath,
					paths: request.parameters.filter(it => it.in === 'path'), // path 传参
					body: body, // body 传参
					params: request.parameters.filter(it => it.in === 'formData'), // params 传参
					responsesRef: R.pathOr('', ['200', 'schema', '$ref'], request.responses).replace(/.*\//g, '') // 返回参数
				})
			}
		})
	})
	return obj
}
// 生成接口
function __emitInterface(jsonData, __dataInfo) {
	return new Promise((resolve, reject) => {
		let __fnInterface = {
			resInterfaceKey: {} // 记录返回名称

		}
		let definitions = jsonData.definitions
		R.mapObjIndexed(async (value, key, obj) => {
			// await sleep()
			__fnInterface[key] = {
				req: [], // 请求接口
				res: [],
				interfaceName: [],
			}
			if (!R.isNil(value) && !R.isEmpty(value)) {
				let params = value.map(async it => {
					await sleep(50)
					// 处理请求参数
					let __req = await __requestParams(it, key, definitions, __fnInterface)
					// 处理响应体
					let __res = await __responseParams(it.responsesRef, it.methodName, key, definitions, __fnInterface)
				})
			}
		}, __dataInfo)
		jsonData.interfaces = __fnInterface
		resolve()
	})
}

// 生成请求方法 ts
function __emitMethodsToTs(jsonData, __dataInfo) {
	R.mapObjIndexed((value, key, obj) => {
		let jsonStr = `/**
 * @Title ${value[0].fileName}
 * @description ${value[0].mapName}
 * @author xieyuhui
 * @date ${new Date()}
*/

${reqestFrom}
import { IBase, IBasePage } from "."
	`
		let interfaceStr = jsonData.interfaces[key].req.join("")
		if (interfaceStr) {
			jsonStr += `/*\n * 请求接口\n*/${interfaceStr}`
		}
		let interfaceStrRes = jsonData.interfaces[key].res.join("")
		if (interfaceStrRes) {
			jsonStr += `/*\n * 响应接口\n*/${interfaceStrRes}`
		}
		value.forEach(it => {
			// path 参数
			let pathStr = it.paths.length > 0 ? it.paths.map(pathObj => `${pathObj.name}: ${pathObj.type == 'integer' ? 'number' : 'string'}`).join(', ') : ''
			pathStr && (pathStr = `{${pathStr}}`)
			// data 参数
			let data = it.reqInterfaceName ? `data: ${it.reqInterfaceName}` : ''

			let resInterType = jsonData.interfaces.resInterfaceKey[it.methodName + 'type'] || ''
			let resInterName = jsonData.interfaces.resInterfaceKey[it.methodName]
			jsonStr += `
/**  
 * @description ${it.summary}${it.description ? ` -- ${it.description}` : ''}
*/
export function ${it.methodName}(${data}): ${resInterType ? 'IBasePage' : 'IBase'}<${resInterName}${resInterType}> {
	return request({
		method: '${it.method.toUpperCase()}',
		url: \`${it.url.replace(/\{/g, '${data.')}\`, ${it.reqInterfaceName ? it.params.length ? `\n		params: data` : it.body ? `\n		data: data` : '' : ''}
	});
}\n`
		})
		process.nextTick(() => {
			__mergeAndWrite(value[0].fileName, jsonStr)
		})
	}, __dataInfo)
}
// 输出
function __mergeAndWrite(fileName, jsonStr) {
	fs.writeFile(`${__fileDir}/${fileName}.ts`, jsonStr, err => {
		if (err) {
			console.error(err)
			return
		}
		//文件写入成功。
		console.log(`文件写入成功: ${__fileDir}/${fileName}.ts`)
	})
}
// 处理请求参数
function __requestParams(it, key, definitions, __fnInterface) {
	let bodyParams = []
	if (definitions[R.pathOr('', ['body', 'it'])(it)]) {
		bodyParams = definitions[it.body.ref]
	}
	let pathsAndFormdata = R.indexBy(R.prop('name'), [].concat(it.paths).concat(it.params))

	let requestParams = R.mergeAll(bodyParams.properties)
	if (pathsAndFormdata && !R.isEmpty(pathsAndFormdata)) {
		requestParams = R.merge(pathsAndFormdata, requestParams)
	}
	if (requestParams && !R.isEmpty(requestParams)) {
		let interfaceName = `I${R.replace(/^\w{1}/, R.toUpper)(it.methodName)}Params`
		// 同一个 ts 文件 interface 去重
		if (__fnInterface[key].interfaceName.indexOf(interfaceName) !== -1) { return; }
		__fnInterface[key].interfaceName.push(interfaceName)
		// 生成 interface
		let interfaceParamsStr = `\nexport interface ${interfaceName} {\n`
		R.forEachObjIndexed((v, k, o) => {

			interfaceParamsStr += `    ${k}: ${v.type == 'integer' ? 'number' : v.type == 'string' ? 'string' : 'any'}; /* ${v.description || ''}  ${v.format || ''}*/ \n`
		}, requestParams)
		interfaceParamsStr += "}\n"
		__fnInterface[key].req.push(interfaceParamsStr)
		it.reqInterfaceName = interfaceName
	}
}

// 处理响应参数
function __responseParams(responsesRef, methodName, key, definitions, __fnInterface, interfaceName = '') {
	let newInterfaceName = interfaceName
	if (!newInterfaceName) {
		newInterfaceName = `I${R.replace(/^\w{1}/, R.toUpper)(methodName)}Response`
	}

	let resParams = []
	if (responsesRef && definitions[responsesRef]) {
		resParams = R.pathOr([], [responsesRef, 'properties'])(definitions)
		// console.log(resParams)
		let o_ref = R.pathOr('', ['datas', '$ref'], resParams).replace(/.*\//g, '') // 返回数据为对象
		let a_ref = R.pathOr('', ['datas', 'items', '$ref'], resParams).replace(/.*\//g, '') // 返回数据为数组
		if (R.isNil(resParams) || R.isEmpty(resParams)) {
			return
		}
		if (o_ref) {
			// 对象
			__fnInterface.resInterfaceKey[methodName] = newInterfaceName
			__fnInterface.resInterfaceKey[methodName + 'type'] = ''
			let __res = __responseParams(o_ref, methodName, key, definitions, __fnInterface, newInterfaceName)
			return
		} else if (a_ref) {
			// 数组
			__fnInterface.resInterfaceKey[methodName] = newInterfaceName
			__fnInterface.resInterfaceKey[methodName + 'type'] = '[]'
			let __res = __responseParams(a_ref, methodName, key, definitions, __fnInterface, newInterfaceName)
			return
		} else if (!interfaceName) {
			// 无返回
			let sType = R.pathOr('any', ['datas', 'type'], resParams)
			if (sType === 'integer') {
				sType = 'number'
			}
			if (sType === 'object') {
				sType = 'any'
			}
			__fnInterface.resInterfaceKey[methodName] = [sType]
			return
		}
	}
	// 同一个 ts 文件 interface 去重
	if (__fnInterface[key].interfaceName.indexOf(newInterfaceName) !== -1) { return; }
	__fnInterface[key].interfaceName.push(newInterfaceName)
	// console.log(resParams)
	// 嵌套对象
	let interfaceParamsStr = `\nexport interface ${newInterfaceName} {\n`

	R.forEachObjIndexed(async (v, k, o) => {
		let o_ref = R.pathOr('', ['$ref'], v).replace(/.*\//g, '') // 返回数据为对象
		let a_ref = R.pathOr('', ['items', '$ref'], v).replace(/.*\//g, '') // 返回数据为数组
		if (o_ref) {
			// 对象
			let childInterName = `I${R.replace(/^\w{1}/, R.toUpper)(k)}`
			interfaceParamsStr += `    ${k}: ${childInterName}, /* ${v.description || ''}  ${v.format || ''}*/ \n`
			let __res = __responseParams(o_ref, methodName, key, definitions, __fnInterface, childInterName)
			return
		} else if (a_ref) {
			// 数组
			let childInterName = `I${R.replace(/^\w{1}/, R.toUpper)(k)}`
			interfaceParamsStr += `    ${k}: ${childInterName}[], /* ${v.description || ''}  ${v.format || ''}*/ \n`
			let __res = __responseParams(a_ref, methodName, key, definitions, __fnInterface, childInterName)
			return
		} else {
			// 基础数据类型
			let sType = R.pathOr('any', ['type'], v)
			if (sType === 'integer') {
				sType = 'number'
			}
			__fnInterface.resInterfaceKey[newInterfaceName] = sType
			interfaceParamsStr += `    ${k}: ${v.type == 'integer' ? 'number' : v.type == 'string' ? 'string' : 'any'}, /* ${v.description || ''}  ${v.format || ''}*/ \n`
			return
		}
	}, resParams)
	interfaceParamsStr += "}\n"
	__fnInterface[key].res.push(interfaceParamsStr)
}