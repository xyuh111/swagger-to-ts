/**
 * @Title roleAuth
 * @description OEM信息
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface IRoleAuthGetAllRoleAuthResponse {
    backAuth: string, /*   */ 
    crtId: string, /*   */ 
    crtTime: string, /*   date-time*/ 
    delFlg: number, /*   int32*/ 
    level: number, /*   int32*/ 
    pname: string, /*   */ 
    restAuth: string, /*   */ 
    roleId: number, /*   int32*/ 
    roleName: string, /*   */ 
    updId: string, /*   */ 
    updTime: string, /*   date-time*/ 
    version: number, /*   int32*/ 
}

export interface IRoleAuthGetRoleAuthResponse {
    backAuth: string, /*   */ 
    crtId: string, /*   */ 
    crtTime: string, /*   date-time*/ 
    delFlg: number, /*   int32*/ 
    level: number, /*   int32*/ 
    pname: string, /*   */ 
    restAuth: string, /*   */ 
    roleId: number, /*   int32*/ 
    roleName: string, /*   */ 
    updId: string, /*   */ 
    updTime: string, /*   date-time*/ 
    version: number, /*   int32*/ 
}

/**  
 * @description 查询所有OEM信息
*/
export function roleAuthGetAllRoleAuth(): IBasePage<IRoleAuthGetAllRoleAuthResponse[]> {
	return request({
		method: 'GET',
		url: `/roleAuth/getAllRoleAuth`, 
	});
}

/**  
 * @description 查询所有机构信息
*/
export function roleAuthGetRoleAuth(): IBasePage<IRoleAuthGetRoleAuthResponse[]> {
	return request({
		method: 'GET',
		url: `/roleAuth/getRoleAuth`, 
	});
}
