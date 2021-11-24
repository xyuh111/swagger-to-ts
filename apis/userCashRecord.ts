/**
 * @Title userCashRecord
 * @description test商城-资金流水
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IMallUserCashRecordQueryRebateParams {
    page: number; /* page  int32*/ 
    pageSize: number; /* pageSize  int32*/ 
}
/*
 * 响应接口
*/
export interface IMallUserCashRecordQueryRebateResponse {
    bonusbase: any, /* 订单金额  */ 
    cateType: string, /* 收益类型  */ 
    createTime: string, /* 返利时间  date-time*/ 
    money: any, /* 收益金额  */ 
    nick: string, /* 会员名称  */ 
    orderNum: string, /* 订单编号  */ 
    phoneNo: string, /* 手机号  */ 
    proxyid: number, /* 当前等级  int32*/ 
    subNick: string, /* 下级昵称  */ 
    subProxyid: number, /* 下级等级  int32*/ 
}

/**  
 * @description 查询用户返利信息
*/
export function mallUserCashRecordQueryRebate(data: IMallUserCashRecordQueryRebateParams): IBasePage<IMallUserCashRecordQueryRebateResponse[]> {
	return request({
		method: 'POST',
		url: `/mall/userCashRecord/queryRebate/${data.page}/${data.pageSize}`, 
		data: data
	});
}
