/**
 * @Title sysUser
 * @description 管理员用户
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface ISysUserGetAllUserResponse {
    account: string, /*   */ 
    accountName: string, /*   */ 
    compName: string, /*   */ 
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    email: string, /*   */ 
    id: string, /*   */ 
    isEnable: number, /*   int32*/ 
    lastLoginIp: string, /*   */ 
    lastLoginTime: string, /*   date-time*/ 
    linkAddr: string, /*   */ 
    linkMan: string, /*   */ 
    linkTel: string, /*   */ 
    loginCount: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
    oemRoleAuth: number, /*   int32*/ 
    password: string, /*   */ 
    qq: string, /*   */ 
    sex: number, /*   int32*/ 
}

export interface ISysUserGetUserByIdResponse {
    account: string, /*   */ 
    accountName: string, /*   */ 
    compName: string, /*   */ 
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    email: string, /*   */ 
    id: string, /*   */ 
    isEnable: number, /*   int32*/ 
    lastLoginIp: string, /*   */ 
    lastLoginTime: string, /*   date-time*/ 
    linkAddr: string, /*   */ 
    linkMan: string, /*   */ 
    linkTel: string, /*   */ 
    loginCount: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
    oemRoleAuth: number, /*   int32*/ 
    password: string, /*   */ 
    qq: string, /*   */ 
    sex: number, /*   int32*/ 
}

/**  
 * @description 新增用户 -- 添加用户
*/
export function sysUserAddUser(): IBase<number> {
	return request({
		method: 'POST',
		url: `/sysUser/addUser`, 
	});
}

/**  
 * @description 根据ID删除用户 -- 根据主键删除用户信息
*/
export function sysUserDeleteUser(): IBase<number> {
	return request({
		method: 'GET',
		url: `/sysUser/deleteUser`, 
	});
}

/**  
 * @description 查询所有用户信息
*/
export function sysUserGetAllUser(): IBasePage<ISysUserGetAllUserResponse[]> {
	return request({
		method: 'GET',
		url: `/sysUser/getAllUser`, 
	});
}

/**  
 * @description 根据主键查询用户信息 -- 根据UserId查询用户信息
*/
export function sysUserGetUserById(): IBase<ISysUserGetUserByIdResponse> {
	return request({
		method: 'GET',
		url: `/sysUser/getUserById`, 
	});
}

/**  
 * @description 重置密码
*/
export function sysUserUpdatePassword(): IBase<number> {
	return request({
		method: 'POST',
		url: `/sysUser/updatePassword`, 
	});
}

/**  
 * @description 用户修改密码
*/
export function sysUserUpdatePwd(): IBase<number> {
	return request({
		method: 'POST',
		url: `/sysUser/updatePwd`, 
	});
}

/**  
 * @description 修改用户信息
*/
export function sysUserUpdateUser(): IBase<number> {
	return request({
		method: 'POST',
		url: `/sysUser/updateUser`, 
	});
}
