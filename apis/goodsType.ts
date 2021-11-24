/**
 * @Title goodsType
 * @description test商城-商品类型
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IMallGoodsTypeDeleteParams {
    id: number; /* id  int32*/ 
}

export interface IMallGoodsTypeGetTypeSpecParams {
    id: number; /* id  int32*/ 
}

export interface IMallGoodsTypeUpdateParams {
    id: number; /* id  int32*/ 
}
/*
 * 响应接口
*/
export interface IMallGoodsTypeGetTypeSpecResponse {
    checked: any, /* 选中状态  */ 
    specId: number, /* 规格ID  int32*/ 
    specName: string, /* 规格名称  */ 
}

export interface IMallGoodsTypeQueryResponse {
    id: number, /* ID  int32*/ 
    name: string, /* 名称  */ 
    sort: number, /* 排序  int32*/ 
}

/**  
 * @description 新增
*/
export function mallGoodsTypeAdd(): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/goodsType/add`, 
	});
}

/**  
 * @description 根据ID删除
*/
export function mallGoodsTypeDelete(data: IMallGoodsTypeDeleteParams): IBase<any> {
	return request({
		method: 'GET',
		url: `/mall/goodsType/delete/${data.id}`, 
	});
}

/**  
 * @description 根据类型ID查询类型规格信息
*/
export function mallGoodsTypeGetTypeSpec(data: IMallGoodsTypeGetTypeSpecParams): IBasePage<IMallGoodsTypeGetTypeSpecResponse[]> {
	return request({
		method: 'GET',
		url: `/mall/goodsType/getTypeSpec/${data.id}`, 
	});
}

/**  
 * @description 查询所有商品类型
*/
export function mallGoodsTypeQuery(): IBasePage<IMallGoodsTypeQueryResponse[]> {
	return request({
		method: 'GET',
		url: `/mall/goodsType/query`, 
	});
}

/**  
 * @description 修改
*/
export function mallGoodsTypeUpdate(data: IMallGoodsTypeUpdateParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/goodsType/update/${data.id}`, 
		data: data
	});
}
