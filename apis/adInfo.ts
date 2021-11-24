/**
 * @Title adInfo
 * @description 广告信息
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IAdInfoSaveParams {
    adPicFile: any; /* adPicFile  */ 
}

export interface IAdInfoUpdateParams {
    adPicFile: any; /* adPicFile  */ 
}
/*
 * 响应接口
*/
export interface IAdInfoGetAdInfoResponse {
    adContent: string, /*   */ 
    adImg: string, /*   */ 
    adSort: number, /*   int32*/ 
    adSource: number, /*   int32*/ 
    adStatus: number, /*   int32*/ 
    adTimes: number, /*   int32*/ 
    adType: number, /*   int32*/ 
    adUrl: string, /*   */ 
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    id: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
    urlType: number, /*   int32*/ 
}

/**  
 * @description 根据ID删除 -- 根据主键删除
*/
export function adInfoDelete(): IBase<any> {
	return request({
		method: 'GET',
		url: `/adInfo/delete`, 
	});
}

/**  
 * @description 分页查询
*/
export function adInfoGetAdInfo(): IBasePage<IAdInfoGetAdInfoResponse[]> {
	return request({
		method: 'GET',
		url: `/adInfo/getAdInfo`, 
	});
}

/**  
 * @description 新增 -- 添加
*/
export function adInfoSave(data: IAdInfoSaveParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/adInfo/save`, 
		params: data
	});
}

/**  
 * @description 修改
*/
export function adInfoUpdate(data: IAdInfoUpdateParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/adInfo/update`, 
		params: data
	});
}
