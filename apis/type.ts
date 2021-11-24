/**
 * @Title type
 * @description test商城-商品分类
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IMallTypeDeleteParams {
    code: number; /* code  int64*/ 
}

export interface IMallTypeUpdateParams {
    code: number; /* code  int64*/ 
}
/*
 * 响应接口
*/
export interface IMallTypeQueryAllResponse {
    code: string, /* 分类编码  */ 
    ico: string, /* 分类图标  */ 
    name: string, /* 分类名称  */ 
    sort: number, /* 排序  int32*/ 
}

/**  
 * @description 添加分类
*/
export function mallTypeAdd(): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/type/add`, 
	});
}

/**  
 * @description 删除分类
*/
export function mallTypeDelete(data: IMallTypeDeleteParams): IBase<any> {
	return request({
		method: 'GET',
		url: `/mall/type/delete/${data.code}`, 
	});
}

/**  
 * @description 查询所有分类
*/
export function mallTypeQueryAll(): IBasePage<IMallTypeQueryAllResponse[]> {
	return request({
		method: 'GET',
		url: `/mall/type/queryAll`, 
	});
}

/**  
 * @description 修改分类
*/
export function mallTypeUpdate(data: IMallTypeUpdateParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/type/update/${data.code}`, 
		data: data
	});
}
