/**
 * @Title ssoApp
 * @description OEM信息(新)
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface ISsoAppQueryResponse {
    accessTokenValiditySeconds: number, /*   int64*/ 
    cid: number, /*   int64*/ 
    createTime: number, /*   int64*/ 
    enabled: string, /*   byte*/ 
    grantTypes: string, /*   */ 
    icon: string, /*   */ 
    id: string, /*   */ 
    name: string, /*   */ 
    notifyUrl: string, /*   */ 
    redirectUris: string, /*   */ 
    refreshTokenValiditySeconds: number, /*   int64*/ 
    secret: string, /*   */ 
    updateTime: number, /*   int64*/ 
}

/**  
 * @description 查询所有OEM
*/
export function ssoAppQuery(): IBasePage<ISsoAppQueryResponse[]> {
	return request({
		method: 'GET',
		url: `/ssoApp/query`, 
	});
}
