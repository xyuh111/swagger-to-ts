/**
 * @Title mcCase
 * @description 案例管理
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IMcCaseDeleteSysParams {
    id: number; /* id  int32*/ 
}

export interface IMcCaseGetParams {
    id: number; /* id  int32*/ 
}

export interface IMcCaseQueryParams {
    page: number; /* page  int32*/ 
    pageSize: number; /* pageSize  int32*/ 
}
/*
 * 响应接口
*/
export interface IMcCaseGetResponse {
    afterDate: string, /* 项目后时间  date-time*/ 
    afterImgs: string, /* 项目后图片  */ 
    beforeDate: string, /* 项目前时间  date-time*/ 
    beforeImgs: string, /* 项目前图片  */ 
    caseMemo: string, /* 案例说明  */ 
    caseName: string, /* 案例名称  */ 
    caseType: number, /* 案例类型  int32*/ 
    checkReason: string, /* 不通过理由  */ 
    id: number, /*   int32*/ 
    isHome: number, /* 是否首页  int32*/ 
    isReport: number, /* 是否报告页  int32*/ 
    isShared: number, /* 是否公开  int32*/ 
    isSys: number, /* 是否系统  int32*/ 
    symptom: number, /* 案例标签  int32*/ 
}

export interface IMcCaseQueryResponse {
    afterDate: string, /* 项目后时间  date-time*/ 
    afterImg: string, /* 项目后图片  */ 
    beforeDate: string, /* 项目前时间  date-time*/ 
    beforeImg: string, /* 项目前图片  */ 
    caseName: string, /* 案例名称  */ 
    caseStatus: number, /* 案例状态  int32*/ 
    caseType: number, /* 案例类型  int32*/ 
    createTime: string, /* 创建时间  date-time*/ 
    id: number, /*   int32*/ 
    isSys: number, /* 是否系统案例  int32*/ 
    oemId: number, /* OEM  int32*/ 
    phoneNo: string, /* 联系方式  */ 
    userName: string, /* 用户名称  */ 
}

/**  
 * @description 新增
*/
export function mcCaseAdd(): IBase<number> {
	return request({
		method: 'POST',
		url: `/mcCase/add`, 
	});
}

/**  
 * @description 审核
*/
export function mcCaseCheck(): IBase<number> {
	return request({
		method: 'POST',
		url: `/mcCase/check`, 
	});
}

/**  
 * @description 根据ID删除系统案例
*/
export function mcCaseDeleteSys(data: IMcCaseDeleteSysParams): IBase<number> {
	return request({
		method: 'GET',
		url: `/mcCase/delete/sys/${data.id}`, 
	});
}

/**  
 * @description 根据ID获取详细信息
*/
export function mcCaseGet(data: IMcCaseGetParams): IBase<IMcCaseGetResponse> {
	return request({
		method: 'GET',
		url: `/mcCase/get/${data.id}`, 
	});
}

/**  
 * @description 分页查询
*/
export function mcCaseQuery(data: IMcCaseQueryParams): IBasePage<IMcCaseQueryResponse[]> {
	return request({
		method: 'POST',
		url: `/mcCase/query/${data.page}/${data.pageSize}`, 
		data: data
	});
}

/**  
 * @description 修改
*/
export function mcCaseUpdate(): IBase<number> {
	return request({
		method: 'POST',
		url: `/mcCase/update`, 
	});
}
