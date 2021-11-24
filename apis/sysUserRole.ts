/**
 * @Title sysUserRole
 * @description 管理员用户角色信息
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface ISysUserRoleGetSysUserRolesResponse {
    description: string, /*   */ 
    id: number, /*   int32*/ 
    isEnable: number, /*   int32*/ 
    isSys: number, /*   int32*/ 
    name: string, /*   */ 
    roleAuthId: number, /*   int32*/ 
}

/**  
 * @description 分配用户角色
*/
export function sysUserRoleAddSysUserRole(): IBase<number> {
	return request({
		method: 'POST',
		url: `/sysUserRole/addSysUserRole`, 
	});
}

/**  
 * @description 查询当前用户所有角色信息
*/
export function sysUserRoleGetSysUserRoles(): IBasePage<ISysUserRoleGetSysUserRolesResponse[]> {
	return request({
		method: 'GET',
		url: `/sysUserRole/getSysUserRoles`, 
	});
}
