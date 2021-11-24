/**
 * @Title iiotDeviceLog
 * @description 智能物联-设备日志API
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface IIiotDeviceLogGetResponse {
    createTime: string, /*   date-time*/ 
    deviceNo: string, /*   */ 
    deviceType: number, /*   int32*/ 
    energy: number, /*   int32*/ 
    id: number, /*   int64*/ 
    mode: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    opName: string, /*   */ 
    opPhone: string, /*   */ 
    operatorId: number, /*   int64*/ 
    roleAuthId: number, /*   int32*/ 
    roleAuthName: string, /*   */ 
    setTimes: number, /*   int32*/ 
    speed: number, /*   int32*/ 
    useTimes: number, /*   int32*/ 
    userId: string, /*   */ 
}

export interface IIiotDeviceLogQueryResponse {
    createTime: string, /*   date-time*/ 
    deviceNo: string, /*   */ 
    deviceType: number, /*   int32*/ 
    energy: number, /*   int32*/ 
    id: number, /*   int64*/ 
    mode: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    opName: string, /*   */ 
    opPhone: string, /*   */ 
    operatorId: number, /*   int64*/ 
    roleAuthId: number, /*   int32*/ 
    roleAuthName: string, /*   */ 
    roleName: string, /*   */ 
    setTimes: number, /*   int32*/ 
    speed: number, /*   int32*/ 
    useTimes: number, /*   int32*/ 
    userId: string, /*   */ 
    userName: string, /*   */ 
}

/**  
 * @description 新增 -- 添加
*/
export function iiotDeviceLogAdd(): IBase<number> {
	return request({
		method: 'POST',
		url: `/iiotDeviceLog/add`, 
	});
}

/**  
 * @description 根据ID删除 -- 根据主键删除
*/
export function iiotDeviceLogDelete(): IBase<number> {
	return request({
		method: 'GET',
		url: `/iiotDeviceLog/delete`, 
	});
}

/**  
 * @description 根据ID获取详细信息
*/
export function iiotDeviceLogGet(): IBase<IIiotDeviceLogGetResponse> {
	return request({
		method: 'GET',
		url: `/iiotDeviceLog/get`, 
	});
}

/**  
 * @description 分页查询
*/
export function iiotDeviceLogQuery(): IBasePage<IIiotDeviceLogQueryResponse[]> {
	return request({
		method: 'GET',
		url: `/iiotDeviceLog/query`, 
	});
}

/**  
 * @description 修改
*/
export function iiotDeviceLogUpdate(): IBase<number> {
	return request({
		method: 'POST',
		url: `/iiotDeviceLog/update`, 
	});
}
