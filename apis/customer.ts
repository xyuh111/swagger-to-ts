/**
 * @Title customer
 * @description 客户表数据相关API
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface ICustomerGetCustomerByIdResponse {
    crtId: string, /*   */ 
    crtTime: string, /*   date-time*/ 
    cusAddress: string, /*   */ 
    cusAge: number, /*   int32*/ 
    cusAreacode: string, /*   */ 
    cusAreaname: string, /*   */ 
    cusBeauty: number, /*   int32*/ 
    cusBirthd: string, /*   */ 
    cusBirthm: string, /*   */ 
    cusBirthy: string, /*   */ 
    cusCitycode: string, /*   */ 
    cusCityname: string, /*   */ 
    cusCountrycode: string, /*   */ 
    cusCountryname: string, /*   */ 
    cusFertility: number, /*   int32*/ 
    cusHead: string, /*   */ 
    cusMarriage: number, /*   int32*/ 
    cusName: string, /*   */ 
    cusOccupation: string, /*   */ 
    cusOpenid: string, /*   */ 
    cusPhone: string, /*   */ 
    cusProvincecode: string, /*   */ 
    cusProvincename: string, /*   */ 
    cusSex: number, /*   int32*/ 
    cusType: string, /*   */ 
    cusUuid: string, /*   */ 
    delFlg: number, /*   int32*/ 
    unionid: string, /*   */ 
    updId: string, /*   */ 
    updTime: string, /*   date-time*/ 
    userUuid: string, /*   */ 
    version: number, /*   int32*/ 
    weixinOpenid: string, /*   */ 
}

export interface ICustomerGetCustomerCountResponse {
    newCountMonth: number, /*   int32*/ 
    totCount: number, /*   int32*/ 
}

export interface ICustomerQueryByPageResponse {
    crtId: string, /*   */ 
    crtTime: string, /*   date-time*/ 
    cusAddress: string, /*   */ 
    cusAge: number, /*   int32*/ 
    cusAreacode: string, /*   */ 
    cusAreaname: string, /*   */ 
    cusBeauty: number, /*   int32*/ 
    cusBirthd: string, /*   */ 
    cusBirthm: string, /*   */ 
    cusBirthy: string, /*   */ 
    cusCitycode: string, /*   */ 
    cusCityname: string, /*   */ 
    cusCountrycode: string, /*   */ 
    cusCountryname: string, /*   */ 
    cusFertility: number, /*   int32*/ 
    cusHead: string, /*   */ 
    cusMarriage: number, /*   int32*/ 
    cusName: string, /*   */ 
    cusOccupation: string, /*   */ 
    cusOpenid: string, /*   */ 
    cusPhone: string, /*   */ 
    cusProvincecode: string, /*   */ 
    cusProvincename: string, /*   */ 
    cusSex: number, /*   int32*/ 
    cusType: string, /*   */ 
    cusUuid: string, /*   */ 
    delFlg: number, /*   int32*/ 
    roleId: string, /*   */ 
    roleName: string, /*   */ 
    unionid: string, /*   */ 
    updId: string, /*   */ 
    updTime: string, /*   date-time*/ 
    userIds: any, /*   */ 
    userName: string, /*   */ 
    userUuid: string, /*   */ 
    version: number, /*   int32*/ 
    weixinOpenid: string, /*   */ 
}

/**  
 * @description 根据主键查询客户信息 -- 根据CustomerId查询客户信息
*/
export function customerGetCustomerById(): IBase<ICustomerGetCustomerByIdResponse> {
	return request({
		method: 'GET',
		url: `/customer/getCustomerById`, 
	});
}

/**  
 * @description 获取当前用户总客户数, 及本月新增数量
*/
export function customerGetCustomerCount(): IBase<ICustomerGetCustomerCountResponse> {
	return request({
		method: 'GET',
		url: `/customer/getCustomerCount`, 
	});
}

/**  
 * @description 分页查询当前登录用户下的客户信息 -- 分页查询所有客户信息
*/
export function customerQueryByPage(): IBasePage<ICustomerQueryByPageResponse[]> {
	return request({
		method: 'GET',
		url: `/customer/queryByPage`, 
	});
}

/**  
 * @description 客户迁移
*/
export function customerTransfer(): IBase<number> {
	return request({
		method: 'POST',
		url: `/customer/transfer`, 
	});
}
