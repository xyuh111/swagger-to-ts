/**
 * @Title specification
 * @description test商城-规格信息
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IMallSpecificationDeleteParams {
    id: number; /* id  int32*/ 
}

export interface IMallSpecificationQueryValueParams {
    specId: number; /* specId  int32*/ 
}

export interface IMallSpecificationUpdateValueParams {
    specId: number; /* specId  int32*/ 
    delids: string; /* delids  */ 
}

export interface IMallSpecificationUpdateParams {
    id: number; /* id  int32*/ 
}
/*
 * 响应接口
*/
export interface IMallSpecificationQueryResponse {
    sort: number, /* 规格排序  int32*/ 
    specId: number, /* 规格ID  int32*/ 
    specName: string, /* 规格名称  */ 
}

export interface IMallSpecificationQueryValueResponse {
    id: number, /* 规格值ID  int32*/ 
    sort: number, /* 规格值排序  int32*/ 
    specId: number, /* 规格ID  int32*/ 
    specValue: string, /* 规格值  */ 
}

/**  
 * @description 后台-新增规格
*/
export function mallSpecificationAdd(): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/specification/add`, 
	});
}

/**  
 * @description 后台-删除规格
*/
export function mallSpecificationDelete(data: IMallSpecificationDeleteParams): IBase<any> {
	return request({
		method: 'GET',
		url: `/mall/specification/delete/${data.id}`, 
	});
}

/**  
 * @description 后台-查询规格信息
*/
export function mallSpecificationQuery(): IBasePage<IMallSpecificationQueryResponse[]> {
	return request({
		method: 'GET',
		url: `/mall/specification/query`, 
	});
}

/**  
 * @description 后台-查询规格值信息
*/
export function mallSpecificationQueryValue(data: IMallSpecificationQueryValueParams): IBasePage<IMallSpecificationQueryValueResponse[]> {
	return request({
		method: 'GET',
		url: `/mall/specification/query/value/${data.specId}`, 
	});
}

/**  
 * @description 后台-修改规格值信息
*/
export function mallSpecificationUpdateValue(data: IMallSpecificationUpdateValueParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/specification/update/value/${data.specId}/${data.delids}`, 
		data: data
	});
}

/**  
 * @description 后台-修改规格
*/
export function mallSpecificationUpdate(data: IMallSpecificationUpdateParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/specification/update/${data.id}`, 
		data: data
	});
}
