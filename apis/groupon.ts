/**
 * @Title groupon
 * @description 团购管理
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IGrouponCheckParams {
    id: number; /* id  int32*/ 
}

export interface IGrouponDeleteParams {
    id: number; /* id  int32*/ 
}

export interface IGrouponGetParams {
    id: number; /* id  int32*/ 
}

export interface IGrouponGetDetailParams {
    id: number; /* id  int32*/ 
}

export interface IGrouponQueryParams {
    page: number; /* page  int32*/ 
    pageSize: number; /* pageSize  int32*/ 
}

export interface IGrouponStopParams {
    id: number; /* id  int32*/ 
}

export interface IGrouponUpdateParams {
    id: number; /* id  int32*/ 
}
/*
 * 响应接口
*/
export interface IGrouponGetResponse {
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    endTime: string, /*   date-time*/ 
    grouponStatus: number, /*   int32*/ 
    id: number, /*   int32*/ 
    name: string, /*   */ 
    startTime: string, /*   date-time*/ 
}

export interface IGrouponGetDetailResponse {
    goodsId: number, /* 商品Id  int64*/ 
    goodsName: string, /* 商品名称  */ 
    grouponDesc: string, /* 描述信息  */ 
    grouponImg: string, /* 团购明细图片  */ 
    grouponLimit: any, /* 成团数量  */ 
    grouponPrice: any, /* 团购价  */ 
    price: any, /* 销售价  */ 
}

export interface IGrouponQueryResponse {
    createTime: string, /* 创建时间  date-time*/ 
    createUser: string, /* 创建人  */ 
    endTime: string, /* 结束时间  date-time*/ 
    grouponStatus: number, /* 团购状态 1待审核，2审核通过(进行中) 3已结束  int32*/ 
    id: number, /* ID  int32*/ 
    name: string, /* 活动名称  */ 
    startTime: string, /* 开始日期  date-time*/ 
}

/**  
 * @description 新增团购
*/
export function grouponAdd(): IBase<number> {
	return request({
		method: 'POST',
		url: `/groupon/add`, 
	});
}

/**  
 * @description 审核团购
*/
export function grouponCheck(data: IGrouponCheckParams): IBase<number> {
	return request({
		method: 'GET',
		url: `/groupon/check/${data.id}`, 
	});
}

/**  
 * @description 删除团购
*/
export function grouponDelete(data: IGrouponDeleteParams): IBase<number> {
	return request({
		method: 'GET',
		url: `/groupon/delete/${data.id}`, 
	});
}

/**  
 * @description 根据ID获取详细信息
*/
export function grouponGet(data: IGrouponGetParams): IBase<IGrouponGetResponse> {
	return request({
		method: 'GET',
		url: `/groupon/get/${data.id}`, 
	});
}

/**  
 * @description 查看团购活动明细
*/
export function grouponGetDetail(data: IGrouponGetDetailParams): IBasePage<IGrouponGetDetailResponse[]> {
	return request({
		method: 'GET',
		url: `/groupon/getDetail/${data.id}`, 
	});
}

/**  
 * @description 后台分页查询团购活动信息
*/
export function grouponQuery(data: IGrouponQueryParams): IBasePage<IGrouponQueryResponse[]> {
	return request({
		method: 'POST',
		url: `/groupon/query/${data.page}/${data.pageSize}`, 
		data: data
	});
}

/**  
 * @description 结束团购
*/
export function grouponStop(data: IGrouponStopParams): IBase<number> {
	return request({
		method: 'GET',
		url: `/groupon/stop/${data.id}`, 
	});
}

/**  
 * @description 修改团购
*/
export function grouponUpdate(data: IGrouponUpdateParams): IBase<number> {
	return request({
		method: 'POST',
		url: `/groupon/update/${data.id}`, 
		data: data
	});
}
