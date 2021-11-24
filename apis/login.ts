/**
 * @Title login
 * @description 登录
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface ILocale {
    country: string, /*   */ 
    displayCountry: string, /*   */ 
    displayLanguage: string, /*   */ 
    displayName: string, /*   */ 
    displayScript: string, /*   */ 
    displayVariant: string, /*   */ 
    extensionKeys: IExtensionKeys[], /*   */ 
    iso3Country: string, /*   */ 
    iso3Language: string, /*   */ 
    language: string, /*   */ 
    script: string, /*   */ 
    unicodeLocaleAttributes: any, /*   */ 
    unicodeLocaleKeys: any, /*   */ 
    variant: string, /*   */ 
}

export interface IMeiceLoginLoginResponse {
    account: string, /*   */ 
    dateTime: string, /*   */ 
    id: string, /*   */ 
    locale: ILocale, /*   */ 
    loginType: string, /*   */ 
    name: string, /*   */ 
    oemRoleAuth: number, /*   int32*/ 
    password: string, /*   */ 
}

export interface IMeiceLoginMd5Response {
}

/**  
 * @description submitLogin
*/
export function meiceLoginLogin(): IBase<IMeiceLoginLoginResponse> {
	return request({
		method: 'POST',
		url: `/meiceLogin/login`, 
	});
}

/**  
 * @description logout
*/
export function meiceLoginLogout(): IBase<string> {
	return request({
		method: 'GET',
		url: `/meiceLogin/logout`, 
	});
}

/**  
 * @description encode
*/
export function meiceLoginMd5(): IBase<undefined> {
	return request({
		method: 'GET',
		url: `/meiceLogin/md5`, 
	});
}
