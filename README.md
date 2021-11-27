1. 安装

```js
$ npm install swagger-codegen-axios-ts
```

2. 新建 index.js 拷贝以下代码粘贴

```js
const path = require('path');
const swaggerCodegenAxiosTs = require('swagger-codegen-axios-ts');
/**
 *
 * 定义公共响应体的 interface，后端接口一般只返回有分页的数据和没有分页的数据
 * 被编译成 apis/index.d.ts >> IBase 接口
 */
const responseBase = `
 export interface IBase<T> {
     code: number; /* 状态码 */
     datas: T;     /* 返回结果 */
     message: string; /* 返回消息 */
     status: string;  /* 返回值(S/F) */
 }
 `;
/**
 * 被编译成 apis/index.d.ts >> IBasePage 接口
 */
const respanseBasePage = `
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
 `;
/**
 * server ts 文件最前面的几行注释
 * 修改 @author
 * */
const annotationInfo = `/**
 * @Title {Title}
 * @description {description}
 * @author xieyuhui
 * @date {date}
 */
`;
/**
 * server ts 文件需要引入的包
 * */
const requestImport = `import request, { IBasePage, IBase, converFormData } from '.';`;

/**
 * axios 全局拦截器
 * 输出为 >> /apis/index.ts
 * */
const axiosInterce = `import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

/**
 * 定义公共响应体的 interface，后端接口一般只返回有分页的数据和没有分页的数据
 */
${responseBase}
/**
 * 定义公共响应体 分页数据 interface
 */
${respanseBasePage}
/**
 * data 转 formData
 */
export function converFormData(data: { [porpName: string]: string | Blob }): FormData {
    const formData = new FormData()
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            formData.append(key, data[key])
        }
    }
    return formData
}

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        /**  */
        return config;
    },
    (error: AxiosError) => Promise.reject(error)
);

/**
 * 响应拦截器，拦截登录过期或者没有权限
 */
axios.interceptors.response.use(
    (response: AxiosResponse<IBase<any> | IBasePage<any>>): Promise<IBase<any> | IBasePage<any>> => {
        if (!response.data) {
            return Promise.resolve(response.data);
        }
        // 请求成功
        if (response.data.code === 200) {
            return Promise.resolve(response.data);
        }
        // 请求成功，状态不为成功时
        //   message.error(response.data.msg);
        return Promise.reject(new Error(response.data.message));
    },
    (error: AxiosError) => {
        //   message.error(error.message);
        return Promise.reject(error);
    }
);

/**
 * 统一发起请求的函数
 */
export default function request<T>(options: AxiosRequestConfig) {
    return axios.request<T>(options);
}
`;

/**
 * 调用 swagger-codegen-axios-ts 函数
 * */

swaggerCodegenAxiosTs({
    annotationInfo,
    requestImport,
    outputDir: path.join(__dirname, './apis'),
    axiosInterce,
    /**
     * remoteUrl 和 jsonPath 填一项即可
     */

    // remoteUrl: 'http://47.xxx.6.107/web-api/v2/api-docs' // 优先判断 url
    jsonPath: path.join(__dirname, 'node_modules/swagger-codegen-axios-ts/swagger-api-docs.json') // remoteUrl 为空使用 jsonPath
});
```

3. 运行

```bash
$ node index
```
