/**
 * @Title financialStatement
 * @description test商城-财务对账单
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IMallFinancialStatementQueryDetailParams {
    id: number; /* id  int32*/ 
}

export interface IMallFinancialStatementRegenParams {
    month: string; /* month  date-time*/ 
}
/*
 * 响应接口
*/
export interface IMallFinancialStatementQueryResponse {
    createTime: string, /*   date-time*/ 
    id: number, /*   int32*/ 
    moneyIn: any, /*   */ 
    moneyOut: any, /*   */ 
    moneyQc: any, /*   */ 
    moneyQm: any, /*   */ 
    statementDate: string, /*   date-time*/ 
}

export interface IMallFinancialStatementQueryDetailResponse {
    createTime: string, /*   date-time*/ 
    detailDate: string, /*   date-time*/ 
    detailType: number, /*   int32*/ 
    id: number, /*   int32*/ 
    money: any, /*   */ 
    orderId: string, /*   */ 
    statementId: number, /*   int32*/ 
    statementType: number, /*   int32*/ 
}

/**  
 * @description 分页查询
*/
export function mallFinancialStatementQuery(): IBasePage<IMallFinancialStatementQueryResponse[]> {
	return request({
		method: 'POST',
		url: `/mall/financialStatement/query`, 
	});
}

/**  
 * @description 根据ID获取对账单详细信息
*/
export function mallFinancialStatementQueryDetail(data: IMallFinancialStatementQueryDetailParams): IBasePage<IMallFinancialStatementQueryDetailResponse[]> {
	return request({
		method: 'GET',
		url: `/mall/financialStatement/query/detail/${data.id}`, 
	});
}

/**  
 * @description 重新生成该月对账单
*/
export function mallFinancialStatementRegen(data: IMallFinancialStatementRegenParams): IBase<any> {
	return request({
		method: 'GET',
		url: `/mall/financialStatement/regen/${data.month}`, 
	});
}
