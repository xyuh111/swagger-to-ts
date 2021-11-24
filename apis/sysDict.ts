/**
 * @Title sysDict
 * @description 数据字典
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface ISysDictGetAllDictsResponse {
    id: number, /*   int32*/ 
    isEnable: number, /*   int32*/ 
    isSys: number, /*   int32*/ 
    name: string, /*   */ 
    parentId: number, /*   int32*/ 
    property: string, /*   */ 
    sort: number, /*   int32*/ 
    value: string, /*   */ 
}

export interface ISysDictGetByParentResponse {
    id: number, /*   int32*/ 
    isEnable: number, /*   int32*/ 
    isSys: number, /*   int32*/ 
    name: string, /*   */ 
    parentId: number, /*   int32*/ 
    property: string, /*   */ 
    sort: number, /*   int32*/ 
    value: string, /*   */ 
}

/**  
 * @description 删除数据字典信息
*/
export function sysDictDeleteSysDict(): IBase<number> {
	return request({
		method: 'GET',
		url: `/sysDict/deleteSysDict`, 
	});
}

/**  
 * @description 查询数据字典信息
*/
export function sysDictGetAllDicts(): IBasePage<ISysDictGetAllDictsResponse[]> {
	return request({
		method: 'GET',
		url: `/sysDict/getAllDicts`, 
	});
}

/**  
 * @description 根据父节点获取字典
*/
export function sysDictGetByParent(): IBasePage<ISysDictGetByParentResponse[]> {
	return request({
		method: 'GET',
		url: `/sysDict/getByParent`, 
	});
}

/**  
 * @description 保存数据字典信息
*/
export function sysDictSaveSysDict(): IBase<number> {
	return request({
		method: 'POST',
		url: `/sysDict/saveSysDict`, 
	});
}

/**  
 * @description 修改数据字典信息
*/
export function sysDictUpdateSysDict(): IBase<number> {
	return request({
		method: 'POST',
		url: `/sysDict/updateSysDict`, 
	});
}
