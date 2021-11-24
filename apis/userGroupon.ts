/**
 * @Title userGroupon
 * @description test商城-用户团购信息
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IMallGrouponGrouponParams {
    id: number; /* id  int32*/ 
}

export interface IMallGrouponQueryParams {
    page: number; /* page  int32*/ 
    pageSize: number; /* pageSize  int32*/ 
}

export interface IMallGrouponQueryDetailParams {
    id: number; /* id  int32*/ 
}
/*
 * 响应接口
*/
export interface IMallGrouponQueryResponse {
    cnick: string, /*   */ 
    createTime: string, /* 开始时间  date-time*/ 
    endTime: string, /* 结束时间  date-time*/ 
    groupState: number, /* 团购状态  int32*/ 
    grouponCount: number, /* 当前团购人数  int32*/ 
    grouponName: string, /* 团购名称  */ 
    id: number, /* 开团ID  int32*/ 
    limitCount: number, /* 最低团购人数  int32*/ 
    userId: number, /* 用户ID  int64*/ 
    userPhone: string, /* 手机号码  */ 
}

export interface IMallGrouponQueryDetailResponse {
    cavatar: string, /*   */ 
    cnick: string, /*   */ 
    createTime: string, /* 加入时间  date-time*/ 
    ddStatus: number, /* 订单状态  int32*/ 
    openid: string, /*   */ 
    orderId: string, /* 订单编号  */ 
    payPrice: any, /* 支付金额  */ 
    payState: number, /* 支付状态  int32*/ 
    supNick: string, /* 上级昵称  */ 
    userId: number, /*   int32*/ 
}

/**  
 * @description 一键成团
*/
export function mallGrouponGroupon(data: IMallGrouponGrouponParams): IBase<any> {
	return request({
		method: 'GET',
		url: `/mall/groupon/groupon/${data.id}`, 
	});
}

/**  
 * @description 分页查询
*/
export function mallGrouponQuery(data: IMallGrouponQueryParams): IBasePage<IMallGrouponQueryResponse[]> {
	return request({
		method: 'POST',
		url: `/mall/groupon/query/${data.page}/${data.pageSize}`, 
		data: data
	});
}

/**  
 * @description 查看团购明细
*/
export function mallGrouponQueryDetail(data: IMallGrouponQueryDetailParams): IBasePage<IMallGrouponQueryDetailResponse[]> {
	return request({
		method: 'GET',
		url: `/mall/groupon/queryDetail/${data.id}`, 
	});
}
