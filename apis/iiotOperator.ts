/**
 * @Title iiotOperator
 * @description 智能物联-操作员管理API
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface IIiotOperatorGetResponse {
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    id: number, /*   int64*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
    opName: string, /*   */ 
    opPhone: string, /*   */ 
    roleAuthId: number, /*   int32*/ 
    roleAuthName: number, /*   int32*/ 
    userId: string, /*   */ 
}

export interface IIiotOperatorQueryResponse {
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    id: number, /*   int64*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
    opName: string, /*   */ 
    opPhone: string, /*   */ 
    roleAuthId: number, /*   int32*/ 
    roleAuthName: number, /*   int32*/ 
    userId: string, /*   */ 
}

/**  
 * @description 新增 -- 添加
*/
export function iiotOperatorAdd(): IBase<number> {
	return request({
		method: 'POST',
		url: `/iiotOperator/add`, 
	});
}

/**  
 * @description 根据ID删除 -- 根据主键删除
*/
export function iiotOperatorDelete(): IBase<number> {
	return request({
		method: 'GET',
		url: `/iiotOperator/delete`, 
	});
}

/**  
 * @description 根据ID获取详细信息
*/
export function iiotOperatorGet(): IBase<IIiotOperatorGetResponse> {
	return request({
		method: 'GET',
		url: `/iiotOperator/get`, 
	});
}

/**  
 * @description 分页查询
*/
export function iiotOperatorQuery(): IBasePage<IIiotOperatorQueryResponse[]> {
	return request({
		method: 'GET',
		url: `/iiotOperator/query`, 
	});
}

/**  
 * @description 修改
*/
export function iiotOperatorUpdate(): IBase<number> {
	return request({
		method: 'POST',
		url: `/iiotOperator/update`, 
	});
}
