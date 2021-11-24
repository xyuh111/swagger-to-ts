/**
 * @Title sysRole
 * @description 角色信息
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface ISysRoleGetAllSysRoleResponse {
    description: string, /*   */ 
    id: number, /*   int32*/ 
    isEnable: number, /*   int32*/ 
    isSys: number, /*   int32*/ 
    name: string, /*   */ 
    roleAuthId: number, /*   int32*/ 
}

/**  
 * @description 新增角色
*/
export function sysRoleAddSysRole(): IBase<number> {
	return request({
		method: 'POST',
		url: `/sysRole/addSysRole`, 
	});
}

/**  
 * @description 删除角色 -- 逻辑删除角色
*/
export function sysRoleDeleteSysRole(): IBase<number> {
	return request({
		method: 'GET',
		url: `/sysRole/deleteSysRole`, 
	});
}

/**  
 * @description 查询所有角色信息
*/
export function sysRoleGetAllSysRole(): IBasePage<ISysRoleGetAllSysRoleResponse[]> {
	return request({
		method: 'GET',
		url: `/sysRole/getAllSysRole`, 
	});
}

/**  
 * @description 修改角色
*/
export function sysRoleUpdateSysRole(): IBase<number> {
	return request({
		method: 'POST',
		url: `/sysRole/updateSysRole`, 
	});
}
