/**
 * @Title mallCoupon
 * @description test商城-优惠券
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IMallCouponCheckParams {
    id: number; /* id  int32*/ 
}

export interface IMallCouponDeleteParams {
    id: number; /* id  int32*/ 
}

export interface IMallCouponDistributeParams {
    id: number; /* id  int32*/ 
}

export interface IMallCouponGetDetailsParams {
    id: number; /* id  int32*/ 
    page: number; /* page  int32*/ 
    pageSize: number; /* pageSize  int32*/ 
}

export interface IMallCouponGetParams {
    id: number; /* id  int32*/ 
}

export interface IMallCouponQueryParams {
    page: number; /* page  int32*/ 
    pageSize: number; /* pageSize  int32*/ 
}

export interface IMallCouponUpdateParams {
    id: number; /* id  int32*/ 
}
/*
 * 响应接口
*/
export interface IMallCouponGetDetailsResponse {
    createTime: string, /* 领取时间  date-time*/ 
    detailStatus: number, /* 券状态(1未使用, 2已使用)  int32*/ 
    id: number, /*   int64*/ 
    memberName: string, /* 领用人  */ 
    receiveType: number, /* 领取方式(1系统发放,2活动领取,3兑换码兑换)  int32*/ 
}

export interface IMallCouponGetResponse {
    availableEndTime: string, /*   date-time*/ 
    availableStartTime: string, /*   date-time*/ 
    checkTime: string, /*   date-time*/ 
    checkUser: string, /*   */ 
    couponAmt: any, /*   */ 
    couponDesc: string, /*   */ 
    couponImg: string, /*   */ 
    couponInfoId: number, /*   int64*/ 
    couponQty: number, /*   int32*/ 
    couponStatus: number, /*   int32*/ 
    couponType: number, /*   int32*/ 
    couponUsedAmt: any, /*   */ 
    couponUserLimit: number, /*   int32*/ 
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    endTime: string, /*   date-time*/ 
    id: number, /*   int32*/ 
    startTime: string, /*   date-time*/ 
}

export interface IMallCouponQueryResponse {
    availableEndTime: string, /* 使用结束时间  date-time*/ 
    availableStartTime: string, /* 使用开始时间  date-time*/ 
    checkTime: string, /* 审核时间  date-time*/ 
    couponAmt: any, /* 券面金额(减)  */ 
    couponDesc: string, /* 优惠券描述信息  */ 
    couponInfoId: number, /* 关联ID  int64*/ 
    couponInfoName: string, /* 关联名称  */ 
    couponQty: number, /* 发券数量  int32*/ 
    couponStatus: number, /* 券状态(1未审核,2审核通过)  int32*/ 
    couponType: number, /* 券类型(9全品,1单品优惠券,2品类优惠券)  int32*/ 
    couponUsedAmt: any, /* 用券金额(满)  */ 
    createTime: string, /* 创建时间  date-time*/ 
    id: number, /*   int64*/ 
    receiveQty: number, /* 领券数量  int32*/ 
}

/**  
 * @description 新增
*/
export function mallCouponAdd(): IBase<number> {
	return request({
		method: 'POST',
		url: `/mall/coupon/add`, 
	});
}

/**  
 * @description 审核
*/
export function mallCouponCheck(data: IMallCouponCheckParams): IBase<number> {
	return request({
		method: 'GET',
		url: `/mall/coupon/check/${data.id}`, 
	});
}

/**  
 * @description 根据ID删除
*/
export function mallCouponDelete(data: IMallCouponDeleteParams): IBase<number> {
	return request({
		method: 'GET',
		url: `/mall/coupon/delete/${data.id}`, 
	});
}

/**  
 * @description 发放优惠券
*/
export function mallCouponDistribute(data: IMallCouponDistributeParams): IBase<number> {
	return request({
		method: 'POST',
		url: `/mall/coupon/distribute/${data.id}`, 
		data: data
	});
}

/**  
 * @description 根据ID获取领用明细
*/
export function mallCouponGetDetails(data: IMallCouponGetDetailsParams): IBasePage<IMallCouponGetDetailsResponse[]> {
	return request({
		method: 'GET',
		url: `/mall/coupon/get/details/${data.id}/${data.page}/${data.pageSize}`, 
	});
}

/**  
 * @description 根据ID获取详细信息
*/
export function mallCouponGet(data: IMallCouponGetParams): IBase<IMallCouponGetResponse> {
	return request({
		method: 'GET',
		url: `/mall/coupon/get/${data.id}`, 
	});
}

/**  
 * @description 查询优惠券信息
*/
export function mallCouponQuery(data: IMallCouponQueryParams): IBasePage<IMallCouponQueryResponse[]> {
	return request({
		method: 'POST',
		url: `/mall/coupon/query/${data.page}/${data.pageSize}`, 
		data: data
	});
}

/**  
 * @description 修改
*/
export function mallCouponUpdate(data: IMallCouponUpdateParams): IBase<number> {
	return request({
		method: 'POST',
		url: `/mall/coupon/update/${data.id}`, 
		data: data
	});
}
