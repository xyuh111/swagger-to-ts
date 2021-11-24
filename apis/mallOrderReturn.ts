/**
 * @Title mallOrderReturn
 * @description test商城-售后订单
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IMallOrderReturnCheckGetParams {
    id: number; /* id  int64*/ 
}

export interface IMallOrderReturnExpressParams {
    id: number; /* id  int64*/ 
}

export interface IMallOrderReturnGetParams {
    id: number; /* id  int64*/ 
}

export interface IMallOrderReturnQueryParams {
    page: number; /* page  int32*/ 
    pageSize: number; /* pageSize  int32*/ 
}
/*
 * 响应接口
*/
export interface IOrderReturnGoodsDetails {
    goodsId: number, /* 商品编号  int64*/ 
    goodsName: string, /* 商品名称  */ 
    goodsSpec: string, /* 商品规格  */ 
    money: any, /* 商品单价  */ 
    num: number, /* 商品数量  int32*/ 
}

export interface IMallOrderReturnCheckGetResponse {
    deviceNums: string, /* 退货设备  */ 
    goodsCount: number, /* 申请数量  int32*/ 
    goodsId: number, /* 商品编号  int32*/ 
    orderId: string, /* 订单编号  */ 
    orderReturnGoodsDetails: IOrderReturnGoodsDetails[], /* 退货商品明细  */ 
    payMoney: any, /* 支付金额  */ 
    productId: number, /* 货品编号  int32*/ 
    rejectImags: string, /* 退货图片  */ 
    returnReason: string, /* 退款原因  */ 
    returnType: number, /* 售后类型  int32*/ 
}

export interface IData {
    context: string, /* 内容  */ 
    ftime: string, /* 格式化时间  */ 
    time: string, /* 原始时间  */ 
}

export interface IMallOrderReturnExpressResponse {
    com: string, /* 快递公司编码,一律用小写字母  */ 
    condition: string, /* 快递单明细状态标记，暂未实现，请忽略  */ 
    data: IData[], /* 最新查询结果，数组，包含多项，全量，倒序（即时间最新的在最前），每项都是对象，对象包含字段请展开  */ 
    ischeck: string, /* 是否签收标记，请忽略，明细状态请参考state字段  */ 
    message: string, /* 消息体，请忽略  */ 
    nu: string, /* 单号  */ 
    state: number, /* 快递单当前状态，包括0在途，1揽收，2疑难，3签收，4退签，5派件，6退回，7转单，10待清关，11清关中，12已清关，13清关异常，14收件人拒签等13个状态  int32*/ 
    status: number, /* 通讯状态，请忽略  int32*/ 
}

export interface IMallOrderReturnGetResponse {
    address: string, /* 收货地址  */ 
    bz: string, /* 订单备注  */ 
    goodsCount: number, /* 售后数量  int32*/ 
    goodsId: number, /* 商品编号  int32*/ 
    name: string, /* 用户名  */ 
    orderId: string, /* 订单编号  */ 
    orderReturnGoodsDetails: IOrderReturnGoodsDetails[], /* 退货商品明细  */ 
    productId: number, /* 货品编号  int32*/ 
    rejectImags: string, /* 退货图片  */ 
    returnMoney: any, /* 售后金额  */ 
    returnReason: string, /* 售后原因  */ 
    returnSendFee: any, /* 退运费  */ 
    returnType: number, /* 售后类型  int32*/ 
    sendFee: any, /* 运费  */ 
}

export interface IMallOrderReturnQueryResponse {
    address: string, /* 收货信息  */ 
    appdate: string, /* 购买时间  */ 
    createDate: string, /* 退货时间  */ 
    expressCorp: string, /* 快递公司  */ 
    expressNo: string, /* 快递单号  */ 
    goodsName: string, /* 商品  */ 
    id: number, /*   int64*/ 
    orderId: string, /* 订单编号  */ 
    ordertype: number, /* 订单类型  int32*/ 
    rejectHandletime: string, /* 审核时间  */ 
    returnMode: string, /* 退货方式  */ 
    returnMoney: any, /* 售后金额  */ 
    returnName: string, /* 购买人  */ 
    returnType: number, /* 售后类型  int32*/ 
    status: number, /* 退货状态  int32*/ 
}

/**  
 * @description 审核售后订单
*/
export function mallOrderReturnCheck(): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/order/return/check`, 
	});
}

/**  
 * @description 售后订单明细
*/
export function mallOrderReturnCheckGet(data: IMallOrderReturnCheckGetParams): IBase<IMallOrderReturnCheckGetResponse> {
	return request({
		method: 'GET',
		url: `/mall/order/return/check/get/${data.id}`, 
	});
}

/**  
 * @description 物流查询
*/
export function mallOrderReturnExpress(data: IMallOrderReturnExpressParams): IBase<IMallOrderReturnExpressResponse> {
	return request({
		method: 'GET',
		url: `/mall/order/return/express/${data.id}`, 
	});
}

/**  
 * @description 订单明细
*/
export function mallOrderReturnGet(data: IMallOrderReturnGetParams): IBase<IMallOrderReturnGetResponse> {
	return request({
		method: 'GET',
		url: `/mall/order/return/get/${data.id}`, 
	});
}

/**  
 * @description 分页查询
*/
export function mallOrderReturnQuery(data: IMallOrderReturnQueryParams): IBasePage<IMallOrderReturnQueryResponse[]> {
	return request({
		method: 'POST',
		url: `/mall/order/return/query/${data.page}/${data.pageSize}`, 
		data: data
	});
}
