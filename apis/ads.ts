/**
 * @Title ads
 * @description 广告表数据相关API
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IAdsSaveAdsParams {
    adPicFile: any; /* adPicFile  */ 
}

export interface IAdsUpdateAdsParams {
    adPicFile: any; /* adPicFile  */ 
}
/*
 * 响应接口
*/
export interface IAdsQueryResponse {
    adContent: string, /*   */ 
    adId: number, /*   int32*/ 
    adPic: string, /*   */ 
    adSite: number, /*   int32*/ 
    adTitle: string, /*   */ 
    crtId: string, /*   */ 
    crtTime: string, /*   date-time*/ 
    delFlg: number, /*   int32*/ 
    roleId: number, /*   int32*/ 
    updId: string, /*   */ 
    updTime: string, /*   date-time*/ 
    version: number, /*   int32*/ 
}

/**  
 * @description 根据ID删除广告 -- 根据主键删除广告信息
*/
export function adsDeleteAds(): IBase<number> {
	return request({
		method: 'GET',
		url: `/ads/deleteAds`, 
	});
}

/**  
 * @description 广告分页查询
*/
export function adsQuery(): IBasePage<IAdsQueryResponse[]> {
	return request({
		method: 'GET',
		url: `/ads/query`, 
	});
}

/**  
 * @description 新增广告 -- 添加广告
*/
export function adsSaveAds(data: IAdsSaveAdsParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/ads/saveAds`, 
		params: data
	});
}

/**  
 * @description 修改广告信息
*/
export function adsUpdateAds(data: IAdsUpdateAdsParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/ads/updateAds`, 
		params: data
	});
}
