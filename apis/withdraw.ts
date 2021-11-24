/**
 * @Title withdraw
 * @description test商城-提现列表
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IMallWithdrawAgreeParams {
    id: number; /* id  int32*/ 
}

export interface IMallWithdrawPayParams {
    id: number; /* id  int32*/ 
}

export interface IMallWithdrawQueryParams {
    page: number; /* page  int32*/ 
    pageSize: number; /* pageSize  int32*/ 
}

export interface IMallWithdrawRejectParams {
    id: number; /* id  int32*/ 
}
/*
 * 响应接口
*/
export interface IMallWithdrawQueryResponse {
    bankName: string, /* 开户行  */ 
    cardUserName: string, /* 持卡人  */ 
    cardUserPhone: string, /* 持卡人手机  */ 
    createTime: string, /* 申请时间  date-time*/ 
    handleTime: string, /* 处理时间  date-time*/ 
    id: number, /* ID  int32*/ 
    money: any, /* 提现金额  */ 
    nick: string, /* 申请人  */ 
    status: number, /* 提现状态:1待处理,2已同意,3已驳回,4已打款  int32*/ 
    subBankName: string, /* 支行名称  */ 
    userCardNo: string, /* 卡号  */ 
}

/**  
 * @description 后台-同意提现
*/
export function mallWithdrawAgree(data: IMallWithdrawAgreeParams): IBase<number> {
	return request({
		method: 'GET',
		url: `/mall/withdraw/agree/${data.id}`, 
	});
}

/**  
 * @description 后台-提现打款
*/
export function mallWithdrawPay(data: IMallWithdrawPayParams): IBase<number> {
	return request({
		method: 'GET',
		url: `/mall/withdraw/pay/${data.id}`, 
	});
}

/**  
 * @description 后台-查询提现列表
*/
export function mallWithdrawQuery(data: IMallWithdrawQueryParams): IBasePage<IMallWithdrawQueryResponse[]> {
	return request({
		method: 'POST',
		url: `/mall/withdraw/query/${data.page}/${data.pageSize}`, 
		data: data
	});
}

/**  
 * @description 后台-驳回提现
*/
export function mallWithdrawReject(data: IMallWithdrawRejectParams): IBase<number> {
	return request({
		method: 'GET',
		url: `/mall/withdraw/reject/${data.id}`, 
	});
}
