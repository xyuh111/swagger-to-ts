/**
 * @Title discoveryInfo
 * @description 发现-内容设置
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IDiscoveryInfoUploadImgParams {
    img: any; /* img  */ 
}

export interface IDiscoveryInfoUploadVideoParams {
    video: any; /* video  */ 
}
/*
 * 响应接口
*/
export interface IDiscoveryInfoGetDiscoveryInfoResponse {
    coverDesc: string, /*   */ 
    coverPic: string, /*   */ 
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    discoveryKindId: string, /*   */ 
    id: string, /*   */ 
    infoContent: string, /*   */ 
    infoSource: number, /*   int32*/ 
    infoStatus: number, /*   int32*/ 
    isHome: number, /*   int32*/ 
    isTop: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
}

export interface IDiscoveryInfoQueryAllResponse {
    coverDesc: string, /*   */ 
    coverPic: string, /*   */ 
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    discoveryKindId: string, /*   */ 
    id: string, /*   */ 
    infoContent: string, /*   */ 
    infoSource: number, /*   int32*/ 
    infoStatus: number, /*   int32*/ 
    isHome: number, /*   int32*/ 
    isTop: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
}

/**  
 * @description 审核
*/
export function discoveryInfoCheckDiscoveryInfo(): IBase<number> {
	return request({
		method: 'GET',
		url: `/discoveryInfo/checkDiscoveryInfo`, 
	});
}

/**  
 * @description 根据ID删除 -- 根据主键删除
*/
export function discoveryInfoDeleteDiscoveryInfo(): IBase<number> {
	return request({
		method: 'GET',
		url: `/discoveryInfo/deleteDiscoveryInfo`, 
	});
}

/**  
 * @description 分页查询
*/
export function discoveryInfoGetDiscoveryInfo(): IBasePage<IDiscoveryInfoGetDiscoveryInfoResponse[]> {
	return request({
		method: 'GET',
		url: `/discoveryInfo/getDiscoveryInfo`, 
	});
}

/**  
 * @description getDiscoveryInfoId
*/
export function discoveryInfoGetDiscoveryInfoID(): IBase<string> {
	return request({
		method: 'GET',
		url: `/discoveryInfo/getDiscoveryInfoID`, 
	});
}

/**  
 * @description queryAll
*/
export function discoveryInfoQueryAll(): IBasePage<IDiscoveryInfoQueryAllResponse[]> {
	return request({
		method: 'GET',
		url: `/discoveryInfo/queryAll`, 
	});
}

/**  
 * @description 新增 -- 添加
*/
export function discoveryInfoSaveDiscoveryInfo(): IBase<number> {
	return request({
		method: 'POST',
		url: `/discoveryInfo/saveDiscoveryInfo`, 
	});
}

/**  
 * @description 修改
*/
export function discoveryInfoUpdateDiscoveryInfo(): IBase<number> {
	return request({
		method: 'POST',
		url: `/discoveryInfo/updateDiscoveryInfo`, 
	});
}

/**  
 * @description 上传发现图片
*/
export function discoveryInfoUploadImg(data: IDiscoveryInfoUploadImgParams): IBase<string> {
	return request({
		method: 'POST',
		url: `/discoveryInfo/uploadImg`, 
		params: data
	});
}

/**  
 * @description 上传发现视频
*/
export function discoveryInfoUploadVideo(data: IDiscoveryInfoUploadVideoParams): IBase<string> {
	return request({
		method: 'POST',
		url: `/discoveryInfo/uploadVideo`, 
		params: data
	});
}
