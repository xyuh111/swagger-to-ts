/**
 * @Title user
 * @description 普通用户
 * @author xieyuhui
 * @date Thu Nov 25 2021 21:39:51 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."

/*
 * 请求接口
*/
export interface IUserRestPwdParams {
    pwd?: string; /* 密码  */ 
    userId?: string; /* 用户ID  */ 
}

export interface IUserUpdateUserParams {
    crtId?: string; /*   */ 
    crtTime?: string; /*   date-time*/ 
    delFlg?: number; /*   int32*/ 
    disabled?: number; /*   int32*/ 
    lastLoginTime?: string; /*   date-time*/ 
    settingUpdTime?: string; /*   date-time*/ 
    updId?: string; /*   */ 
    updTime?: string; /*   date-time*/ 
    userAddress?: string; /*   */ 
    userAdminFlg?: number; /*   int32*/ 
    userAreacode?: string; /*   */ 
    userAreaname?: string; /*   */ 
    userCitycode?: string; /*   */ 
    userCityname?: string; /*   */ 
    userContact?: string; /*   */ 
    userCountrycode?: string; /*   */ 
    userCountryname?: string; /*   */ 
    userDevnumber?: string; /*   */ 
    userHead?: string; /*   */ 
    userName?: string; /*   */ 
    userPhone?: string; /*   */ 
    userProvincecode?: string; /*   */ 
    userProvincename?: string; /*   */ 
    userPwd?: string; /*   */ 
    userRole?: string; /*   */ 
    userShopname?: string; /*   */ 
    userTel?: string; /*   */ 
    userUuid?: string; /*   */ 
    version?: number; /*   int32*/ 
}
/*
 * 响应接口
*/
export interface IUserExportCustomerCountResponse {
    cellStyleMap?: any, /*   */ 
    newCount?: number, /*   int32*/ 
    totCount?: number, /*   int32*/ 
    userDevnumber?: string, /*   */ 
    userName?: string, /*   */ 
    userShopname?: string, /*   */ 
}

export interface IUserExportCustomerPicResponse {
    cellStyleMap?: any, /*   */ 
    crtTime?: string, /*   date-time*/ 
    cusName?: string, /*   */ 
    cusSex?: string, /*   */ 
    userDevnumber?: string, /*   */ 
    userName?: string, /*   */ 
    userShopname?: string, /*   */ 
}

export interface IUserGetAllUserResponse {
    crtId?: string, /*   */ 
    crtTime?: string, /*   date-time*/ 
    delFlg?: number, /*   int32*/ 
    disabled?: number, /*   int32*/ 
    lastLoginTime?: string, /*   date-time*/ 
    roleName?: string, /*   */ 
    settingUpdTime?: string, /*   date-time*/ 
    updId?: string, /*   */ 
    updTime?: string, /*   date-time*/ 
    userAddress?: string, /*   */ 
    userAdminFlg?: number, /*   int32*/ 
    userAreacode?: string, /*   */ 
    userAreaname?: string, /*   */ 
    userCitycode?: string, /*   */ 
    userCityname?: string, /*   */ 
    userContact?: string, /*   */ 
    userCountrycode?: string, /*   */ 
    userCountryname?: string, /*   */ 
    userDevnumber?: string, /*   */ 
    userHead?: string, /*   */ 
    userName?: string, /*   */ 
    userPhone?: string, /*   */ 
    userProvincecode?: string, /*   */ 
    userProvincename?: string, /*   */ 
    userPwd?: string, /*   */ 
    userRole?: string, /*   */ 
    userShopname?: string, /*   */ 
    userTel?: string, /*   */ 
    userUuid?: string, /*   */ 
    version?: number, /*   int32*/ 
}

export interface IUserGetUserByIdResponse {
    crtId?: string, /*   */ 
    crtTime?: string, /*   date-time*/ 
    delFlg?: number, /*   int32*/ 
    disabled?: number, /*   int32*/ 
    lastLoginTime?: string, /*   date-time*/ 
    settingUpdTime?: string, /*   date-time*/ 
    updId?: string, /*   */ 
    updTime?: string, /*   date-time*/ 
    userAddress?: string, /*   */ 
    userAdminFlg?: number, /*   int32*/ 
    userAreacode?: string, /*   */ 
    userAreaname?: string, /*   */ 
    userCitycode?: string, /*   */ 
    userCityname?: string, /*   */ 
    userContact?: string, /*   */ 
    userCountrycode?: string, /*   */ 
    userCountryname?: string, /*   */ 
    userDevnumber?: string, /*   */ 
    userHead?: string, /*   */ 
    userName?: string, /*   */ 
    userPhone?: string, /*   */ 
    userProvincecode?: string, /*   */ 
    userProvincename?: string, /*   */ 
    userPwd?: string, /*   */ 
    userRole?: string, /*   */ 
    userShopname?: string, /*   */ 
    userTel?: string, /*   */ 
    userUuid?: string, /*   */ 
    version?: number, /*   int32*/ 
}

/**  
 * @description 根据ID删除用户 -- 根据主键删除用户信息
*/
export function userDeleteUser(): Promise<IBase<number>> {
    return request({
        method: 'GET',
        url: `/user/deleteUser`, 
	});
}

/**  
 * @description 导出店面统计数据
*/
export function userExportCustomerCount(): Promise<IBasePage<IUserExportCustomerCountResponse[]>> {
    return request({
        method: 'GET',
        url: `/user/exportCustomerCount`, 
	});
}

/**  
 * @description 导出客户监测数据
*/
export function userExportCustomerPic(): Promise<IBasePage<IUserExportCustomerPicResponse[]>> {
    return request({
        method: 'GET',
        url: `/user/exportCustomerPic`, 
	});
}

/**  
 * @description 查询所有用户信息
*/
export function userGetAllUser(): Promise<IBasePage<IUserGetAllUserResponse[]>> {
    return request({
        method: 'GET',
        url: `/user/getAllUser`, 
	});
}

/**  
 * @description 根据主键查询用户信息 -- 根据UserId查询用户信息
*/
export function userGetUserById(): Promise<IBase<IUserGetUserByIdResponse>> {
    return request({
        method: 'GET',
        url: `/user/getUserById`, 
	});
}

/**  
 * @description 查询用户数量
*/
export function userGetUserCount(): Promise<IBase<number>> {
    return request({
        method: 'GET',
        url: `/user/getUserCount`, 
	});
}

/**  
 * @description 重置密码
*/
export function userRestPwd(data: IUserRestPwdParams): Promise<IBase<number>> {
    return request({
        method: 'POST',
        url: `/user/restPwd`, 
        data: data
	});
}

/**  
 * @description 修改用户信息
*/
export function userUpdateUser(data: IUserUpdateUserParams): Promise<IBase<number>> {
    return request({
        method: 'POST',
        url: `/user/updateUser`, 
        data: data
	});
}
