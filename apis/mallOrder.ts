/**
 * @Title mallOrder
 * @description test商城-订单信息
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IMallOrderAddOrderReturnParams {
    id: number; /* id  int64*/ 
}

export interface IMallOrderGetDeviceByDeviceNoParams {
    deviceNo: string; /* deviceNo  */ 
}

export interface IMallOrderQueryDetailParams {
    orderNum: string; /* orderNum  */ 
}

export interface IMallOrderQueryDeviceParams {
    orderNum: string; /* orderNum  */ 
}

export interface IMallOrderQueryRebateParams {
    page: number; /* page  int32*/ 
    pageSize: number; /* pageSize  int32*/ 
}

export interface IMallOrderQueryParams {
    page: number; /* page  int32*/ 
    pageSize: number; /* pageSize  int32*/ 
}

export interface IMallOrderUpdateAddressParams {
    id: number; /* id  int64*/ 
}

export interface IMallOrderUpdateExpressParams {
    id: number; /* id  int64*/ 
}
/*
 * 响应接口
*/
export interface IMallOrderGetDeviceByDeviceNoResponse {
    activeTime: string, /* 激活时间  date-time*/ 
    deadTime: string, /* 到期时间  date-time*/ 
    deviceNo: string, /* 设备号  */ 
    isActive: number, /* 是否激活  int32*/ 
    productId: number, /* SKU_ID  int64*/ 
}

export interface IMallOrderQueryDetailResponse {
    buyPrice: any, /* 单价  */ 
    goodsId: number, /* 商品ID  int64*/ 
    goodsName: string, /* 商品名称  */ 
    money: any, /* 总额  */ 
    num: number, /* 购买数量  int32*/ 
    productId: number, /* SKU_ID  int64*/ 
    spec: string, /* 规格  */ 
}

export interface IMallOrderQueryDeviceResponse {
    activeTime: string, /* 激活时间  date-time*/ 
    deadTime: string, /* 到期时间  date-time*/ 
    deviceNo: string, /* 设备号  */ 
    isActive: number, /* 是否激活  int32*/ 
    productId: number, /* SKU_ID  int64*/ 
}

export interface IMallOrderQueryRebateResponse {
    address: string, /*   */ 
    appdate: string, /*   */ 
    ddStatus: number, /*   int32*/ 
    goodscount: any, /*   */ 
    money: any, /*   */ 
    name: string, /*   */ 
    ordernum: string, /*   */ 
    ordertype: number, /*   int32*/ 
    paymoney: any, /*   */ 
    paytime: string, /*   */ 
    rebateA: any, /*   */ 
    rebateB: any, /*   */ 
    rejectStatus: string, /*   byte*/ 
    sendfee: any, /*   */ 
}

export interface IMallOrderQueryResponse {
    address: string, /* 收货信息  */ 
    appDate: string, /* 下单时间  date-time*/ 
    bz: string, /* 备注  */ 
    ddStatus: number, /* 订单状态(1-待付款；2-已付款（待发货）；3-已发货；4-已收货；5已取消；6-退货中；7-退货成功；8-退货失败 9-已转让 10-待审核 11-已审核)  int32*/ 
    discountMoney: any, /* 优惠金额  */ 
    expressCorp: string, /* 物流公司  */ 
    expressNo: string, /* 物流单号  */ 
    ext4: string, /* 续租订单设备号  */ 
    goodsMoney: any, /* 商品金额  */ 
    kfBz: string, /* 客服备注  */ 
    memberName: string, /* 购买人  */ 
    money: any, /* 订单金额  */ 
    orderNum: string, /* 订单编号  */ 
    orderType: number, /* 订单类型(0购物订单;13大礼包;16拼团购;38续租订单)  int32*/ 
    payDate: string, /* 支付时间  date-time*/ 
    payMoney: any, /* 支付金额  */ 
    payType: number, /* 支付方式(9微信;0余额)  int32*/ 
    rejectStatus: number, /* 退货状态(0-初始值；1-申请退货中；2-同意（退货成功）；3-驳回（退货不成功）)  int32*/ 
    rid: number, /* ID  int64*/ 
    sendDate: string, /* 发货时间  date-time*/ 
    sendfee: any, /* 运费  */ 
    takeGoodsTime: string, /* 收货时间  date-time*/ 
    vip1Rebate: any, /* 上上级返利  */ 
    vip2Rebate: any, /* 上级返利  */ 
}

export interface IOrderQueryExportDetails {
    goodsName: string, /* 商品名称  */ 
    goodsSnapshoot: string, /* 商品快照  */ 
    goodsSpec: string, /* 商品规格  */ 
    money: any, /* 购买价格  */ 
    num: number, /* 购买数量  int32*/ 
}

export interface IMallOrderQueryExportResponse {
    address: string, /* 收货信息  */ 
    appDate: string, /* 下单时间  date-time*/ 
    bz: string, /* 备注  */ 
    ddStatus: number, /* 订单状态(1-待付款；2-已付款（待发货）；3-已发货；4-已收货；5已取消；6-退货中；7-退货成功；8-退货失败 9-已转让 10-待审核 11-已审核)  int32*/ 
    discountMoney: any, /* 优惠金额  */ 
    expressCorp: string, /* 物流公司  */ 
    expressNo: string, /* 物流单号  */ 
    ext4: string, /* 续租订单设备号  */ 
    goodsMoney: any, /* 商品金额  */ 
    kfBz: string, /* 客服备注  */ 
    memberName: string, /* 购买人  */ 
    money: any, /* 订单金额  */ 
    orderNum: string, /* 订单编号  */ 
    orderQueryExportDetails: IOrderQueryExportDetails[], /* 订单明细  */ 
    orderType: number, /* 订单类型(0购物订单;13大礼包;16拼团购;38续租订单)  int32*/ 
    payDate: string, /* 支付时间  date-time*/ 
    payMoney: any, /* 支付金额  */ 
    payType: number, /* 支付方式(9微信;0余额)  int32*/ 
    rejectStatus: number, /* 退货状态(0-初始值；1-申请退货中；2-同意（退货成功）；3-驳回（退货不成功）)  int32*/ 
    rid: number, /* ID  int64*/ 
    sendDate: string, /* 发货时间  date-time*/ 
    sendfee: any, /* 运费  */ 
    takeGoodsTime: string, /* 收货时间  date-time*/ 
    vip1Rebate: any, /* 上上级返利  */ 
    vip2Rebate: any, /* 上级返利  */ 
}

/**  
 * @description 后台-代客售后
*/
export function mallOrderAddOrderReturn(data: IMallOrderAddOrderReturnParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/order/add/order/return/${data.id}`, 
		data: data
	});
}

/**  
 * @description 后台-续租订单根据设备号查询设备相关信息
*/
export function mallOrderGetDeviceByDeviceNo(data: IMallOrderGetDeviceByDeviceNoParams): IBase<IMallOrderGetDeviceByDeviceNoResponse> {
	return request({
		method: 'GET',
		url: `/mall/order/getDeviceByDeviceNo/${data.deviceNo}`, 
	});
}

/**  
 * @description 后台-查询订单明细商品信息
*/
export function mallOrderQueryDetail(data: IMallOrderQueryDetailParams): IBasePage<IMallOrderQueryDetailResponse[]> {
	return request({
		method: 'GET',
		url: `/mall/order/query/detail/${data.orderNum}`, 
	});
}

/**  
 * @description 后台-查询订单设备信息
*/
export function mallOrderQueryDevice(data: IMallOrderQueryDeviceParams): IBasePage<IMallOrderQueryDeviceResponse[]> {
	return request({
		method: 'GET',
		url: `/mall/order/query/device/${data.orderNum}`, 
	});
}

/**  
 * @description 查询返利信息
*/
export function mallOrderQueryRebate(data: IMallOrderQueryRebateParams): IBasePage<IMallOrderQueryRebateResponse[]> {
	return request({
		method: 'POST',
		url: `/mall/order/query/rebate/${data.page}/${data.pageSize}`, 
		data: data
	});
}

/**  
 * @description 查询订单信息
*/
export function mallOrderQuery(data: IMallOrderQueryParams): IBasePage<IMallOrderQueryResponse[]> {
	return request({
		method: 'POST',
		url: `/mall/order/query/${data.page}/${data.pageSize}`, 
		data: data
	});
}

/**  
 * @description 后台-查询订单信息
*/
export function mallOrderQueryExport(): IBasePage<IMallOrderQueryExportResponse[]> {
	return request({
		method: 'POST',
		url: `/mall/order/queryExport`, 
	});
}

/**  
 * @description 后台-订单发货
*/
export function mallOrderSend(): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/order/send`, 
	});
}

/**  
 * @description 后台-修改收货地址
*/
export function mallOrderUpdateAddress(data: IMallOrderUpdateAddressParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/order/update/address/${data.id}`, 
		data: data
	});
}

/**  
 * @description 后台-修改物流信息
*/
export function mallOrderUpdateExpress(data: IMallOrderUpdateExpressParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/order/update/express/${data.id}`, 
		data: data
	});
}
