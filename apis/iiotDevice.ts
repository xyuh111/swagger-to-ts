/**
 * @Title iiotDevice
 * @description 智能物联-设备管理API
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface IIiotDeviceGetResponse {
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    deviceName: string, /*   */ 
    deviceNo: string, /*   */ 
    deviceStatus: number, /*   int32*/ 
    deviceTime: number, /*   int32*/ 
    deviceType: number, /*   int32*/ 
    id: number, /*   int64*/ 
    isBtEncry: number, /*   int32*/ 
    isOpen: number, /*   int32*/ 
    isPermanent: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
    roleAuthId: number, /*   int32*/ 
}

export interface IIiotDeviceQueryResponse {
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    deviceName: string, /*   */ 
    deviceNo: string, /*   */ 
    deviceStatus: number, /*   int32*/ 
    deviceTime: number, /*   int32*/ 
    deviceType: number, /*   int32*/ 
    id: number, /*   int64*/ 
    isBtEncry: number, /*   int32*/ 
    isOpen: number, /*   int32*/ 
    isPermanent: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
    roleAuthId: number, /*   int32*/ 
}

/**  
 * @description 新增 -- 添加
*/
export function iiotDeviceAdd(): IBase<number> {
	return request({
		method: 'POST',
		url: `/iiotDevice/add`, 
	});
}

/**  
 * @description 根据ID删除 -- 根据主键删除
*/
export function iiotDeviceDelete(): IBase<number> {
	return request({
		method: 'GET',
		url: `/iiotDevice/delete`, 
	});
}

/**  
 * @description 根据ID获取详细信息
*/
export function iiotDeviceGet(): IBase<IIiotDeviceGetResponse> {
	return request({
		method: 'GET',
		url: `/iiotDevice/get`, 
	});
}

/**  
 * @description 分页查询
*/
export function iiotDeviceQuery(): IBasePage<IIiotDeviceQueryResponse[]> {
	return request({
		method: 'GET',
		url: `/iiotDevice/query`, 
	});
}

/**  
 * @description 修改
*/
export function iiotDeviceUpdate(): IBase<number> {
	return request({
		method: 'POST',
		url: `/iiotDevice/update`, 
	});
}
