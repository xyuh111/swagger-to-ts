/**
 * @Title sysLogin
 * @description 管理员登录
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface ISysLoginGetTokenResponse {
}

export interface ISysLoginGetphResponse {
}

export interface ISysLoginMd5Response {
}

/**  
 * @description getToken
*/
export function sysLoginGetToken(): IBase<undefined> {
	return request({
		method: 'GET',
		url: `/sysLogin/getToken`, 
	});
}

/**  
 * @description getph
*/
export function sysLoginGetph(): IBase<undefined> {
	return request({
		method: 'GET',
		url: `/sysLogin/getph`, 
	});
}

/**  
 * @description submitLogin
*/
export function sysLoginLogin(): IBase<any> {
	return request({
		method: 'POST',
		url: `/sysLogin/login`, 
	});
}

/**  
 * @description logout
*/
export function sysLoginLogout(): IBase<string> {
	return request({
		method: 'GET',
		url: `/sysLogin/logout`, 
	});
}

/**  
 * @description encode
*/
export function sysLoginMd5(): IBase<undefined> {
	return request({
		method: 'GET',
		url: `/sysLogin/md5`, 
	});
}
