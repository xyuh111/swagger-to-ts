/**
 * @Title mcRule
 * @description 算法-算法权限
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IReportMcRuleCheckPwdParams {
    pwd: string; /* pwd  */ 
}

export interface IReportMcRuleQueryOemRuleParams {
    oemId: number; /* oemId  int32*/ 
}
/*
 * 响应接口
*/
export interface IReportMcRuleQueryHeaderResponse {
    filedName: string, /* 表头字段  */ 
    headerName: string, /* 表头名称  */ 
}

export interface IReportMcRuleQueryOemRuleResponse {
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    filedName: string, /*   */ 
    id: string, /*   */ 
    name: string, /*   */ 
    oemId: number, /*   int32*/ 
    opened: string, /* 是否开放此权限  */ 
    symptom: number, /*   int32*/ 
    symptomPicId: string, /*   */ 
    symptomPicName: string, /*   */ 
}

/**  
 * @description 校验算法权限密码
*/
export function reportMcRuleCheckPwd(data: IReportMcRuleCheckPwdParams): IBase<any> {
	return request({
		method: 'GET',
		url: `/report/mcRule/check/pwd/${data.pwd}`, 
	});
}

/**  
 * @description 分页查询所有OEM算法权限 -- 分页查询
*/
export function reportMcRuleQuery(): IBasePage<IReportMcRuleQueryResponse[]> {
	return request({
		method: 'GET',
		url: `/report/mcRule/query`, 
	});
}

/**  
 * @description 查询表头信息
*/
export function reportMcRuleQueryHeader(): IBasePage<IReportMcRuleQueryHeaderResponse[]> {
	return request({
		method: 'GET',
		url: `/report/mcRule/queryHeader`, 
	});
}

/**  
 * @description queryOemRule
*/
export function reportMcRuleQueryOemRule(data: IReportMcRuleQueryOemRuleParams): IBasePage<IReportMcRuleQueryOemRuleResponse[]> {
	return request({
		method: 'GET',
		url: `/report/mcRule/queryOemRule/${data.oemId}`, 
	});
}

/**  
 * @description save
*/
export function reportMcRuleSave(): IBase<any> {
	return request({
		method: 'POST',
		url: `/report/mcRule/save`, 
	});
}
