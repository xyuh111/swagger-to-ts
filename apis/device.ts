/**
 * @Title device
 * @description 设备管理
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IDeviceReletParams {
    devNum: string; /* devNum  */ 
}

export interface IDeviceRentToBuyParams {
    devNum: string; /* devNum  */ 
}
/*
 * 响应接口
*/
export interface IDeviceGetDeviceResponse {
    belongRole: string, /*   */ 
    crtId: string, /*   */ 
    crtName: string, /*   */ 
    crtTime: string, /*   date-time*/ 
    delFlg: number, /*   int32*/ 
    devAlias: string, /*   */ 
    devId: number, /*   int32*/ 
    devName: string, /*   */ 
    devNumber: string, /*   */ 
    devOpenstatus: number, /*   int32*/ 
    devOrderId: string, /*   */ 
    devSpecification: number, /*   int32*/ 
    devSpectrum: number, /*   int32*/ 
    devType: number, /*   int32*/ 
    devUsed: number, /*   int32*/ 
    isBluetoothEncryption: number, /*   int32*/ 
    newDevNumber: string, /*   */ 
    roleName: string, /*   */ 
    updId: string, /*   */ 
    updName: string, /*   */ 
    updTime: string, /*   date-time*/ 
    userName: string, /*   */ 
    userUuid: string, /*   */ 
    version: number, /*   int32*/ 
}

export interface IDeviceTemplate_downloadResponse {
}

/**  
 * @description 新增设备
*/
export function deviceAddDevice(): IBase<number> {
	return request({
		method: 'POST',
		url: `/device/addDevice`, 
	});
}

/**  
 * @description 批量添加设备文件
*/
export function deviceAddDevice_batch(): IBase<number> {
	return request({
		method: 'POST',
		url: `/device/addDevice/_batch`, 
	});
}

/**  
 * @description 更换设备
*/
export function deviceChangeDevice(): IBase<any> {
	return request({
		method: 'POST',
		url: `/device/changeDevice`, 
	});
}

/**  
 * @description 逻辑删除设备
*/
export function deviceDeleteDevice(): IBase<number> {
	return request({
		method: 'POST',
		url: `/device/deleteDevice`, 
	});
}

/**  
 * @description 查询设备信息
*/
export function deviceGetDevice(): IBasePage<IDeviceGetDeviceResponse[]> {
	return request({
		method: 'GET',
		url: `/device/getDevice`, 
	});
}

/**  
 * @description 续租
*/
export function deviceRelet(data: IDeviceReletParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/device/relet/${data.devNum}`, 
	});
}

/**  
 * @description 租转购
*/
export function deviceRentToBuy(data: IDeviceRentToBuyParams): IBase<number> {
	return request({
		method: 'POST',
		url: `/device/rentToBuy/${data.devNum}`, 
	});
}

/**  
 * @description 重新激活设备
*/
export function deviceResetDevice(): IBase<number> {
	return request({
		method: 'POST',
		url: `/device/resetDevice`, 
	});
}

/**  
 * @description 设备模板下载
*/
export function deviceTemplate_download(): IBase<undefined> {
	return request({
		method: 'GET',
		url: `/device/template/_download`, 
	});
}

/**  
 * @description 修改设备信息
*/
export function deviceUpdateDevice(): IBase<number> {
	return request({
		method: 'POST',
		url: `/device/updateDevice`, 
	});
}
