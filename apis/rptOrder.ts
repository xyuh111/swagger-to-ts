/**
 * @Title rptOrder
 * @description 订单报表
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface IOrderRptCancelExportResponse {
    activityMoney: any, /*   */ 
    activityStatus: number, /*   int32*/ 
    address: string, /*   */ 
    addressId: string, /*   */ 
    appdate: string, /*   */ 
    appuser: number, /*   int32*/ 
    buyShopCode: string, /*   */ 
    bz: string, /*   */ 
    cancelreason: string, /*   */ 
    cancleTime: string, /*   */ 
    carIds: string, /*   */ 
    changegoldStatus: number, /*   int32*/ 
    courier: string, /*   */ 
    ddStatus: number, /*   int32*/ 
    deliveryStatus: number, /*   int32*/ 
    discountMoney: any, /*   */ 
    dtime: string, /*   */ 
    email: string, /*   */ 
    enable: number, /*   int32*/ 
    expressCorp: string, /*   */ 
    expressNo: string, /*   */ 
    ext1: string, /*   */ 
    ext2: string, /*   */ 
    ext3: string, /*   */ 
    ext4: string, /*   */ 
    ext5: string, /*   */ 
    ext6: string, /*   */ 
    fromorderid: string, /*   */ 
    gift: string, /*   */ 
    goodscount: any, /*   */ 
    invoiceId: number, /*   int32*/ 
    isCombine: number, /*   int32*/ 
    isForward: number, /*   int32*/ 
    isLunchbox: number, /*   int32*/ 
    isPrint: number, /*   int32*/ 
    isQuan: number, /*   int32*/ 
    isSend: number, /*   int32*/ 
    isgroup: number, /*   int32*/ 
    kfBz: string, /*   */ 
    latitude: string, /*   */ 
    longitude: string, /*   */ 
    lunchboxPrice: any, /*   */ 
    machiningCost: any, /*   */ 
    marketId: string, /*   */ 
    merTrace: string, /*   */ 
    mobile: string, /*   */ 
    money: any, /*   */ 
    name: string, /*   */ 
    ordernum: string, /*   */ 
    ordertype: number, /*   int32*/ 
    overtimeDuty: string, /*   */ 
    payUserId: string, /*   */ 
    paymoney: any, /*   */ 
    paytime: string, /*   */ 
    peisong: string, /*   */ 
    plStatus: number, /*   int32*/ 
    printTime: string, /*   */ 
    probabilityActivityId: number, /*   int64*/ 
    productIds: string, /*   */ 
    quanId: string, /*   */ 
    rebatemoney: any, /*   */ 
    receiptDesc: string, /*   */ 
    receiptRemark: string, /*   */ 
    receiptTitle: string, /*   */ 
    rejectGoodsStatus: string, /*   */ 
    rejectHandletime: string, /*   */ 
    rejectImg: string, /*   */ 
    rejectRemark: string, /*   */ 
    rejectStatus: number, /*   int32*/ 
    rejectType: number, /*   int32*/ 
    reletStatus: number, /*   int32*/ 
    remainmoney: any, /*   */ 
    remindShipment: string, /*   */ 
    rid: number, /*   int64*/ 
    rip: string, /*   */ 
    senddate: string, /*   */ 
    sendfee: any, /*   */ 
    serial: string, /*   */ 
    serialflagno: string, /*   */ 
    serviceShopCode: string, /*   */ 
    serviceTime: string, /*   */ 
    shopId: string, /*   */ 
    sumLunchboxPrice: any, /*   */ 
    sumgoodsprice: any, /*   */ 
    sumpoints: number, /*   int64*/ 
    takegoodstime: string, /*   */ 
    tel: string, /*   */ 
    titles: string, /*   */ 
    toShopDistence: any, /*   */ 
    toUserDistence: any, /*   */ 
    umfFinish: number, /*   int32*/ 
    userId: number, /*   int32*/ 
    userMarkingGroupid: string, /*   */ 
    wxpaystr: string, /*   */ 
    zfType: string, /*   */ 
    ziStatus: number, /*   int32*/ 
    zip: string, /*   */ 
}

export interface IOrderRptRejectExportResponse {
    activityMoney: any, /*   */ 
    activityStatus: number, /*   int32*/ 
    address: string, /*   */ 
    addressId: string, /*   */ 
    appdate: string, /*   */ 
    appuser: number, /*   int32*/ 
    buyShopCode: string, /*   */ 
    bz: string, /*   */ 
    cancelreason: string, /*   */ 
    cancleTime: string, /*   */ 
    carIds: string, /*   */ 
    changegoldStatus: number, /*   int32*/ 
    courier: string, /*   */ 
    ddStatus: number, /*   int32*/ 
    deliveryStatus: number, /*   int32*/ 
    discountMoney: any, /*   */ 
    dtime: string, /*   */ 
    email: string, /*   */ 
    enable: number, /*   int32*/ 
    expressCorp: string, /*   */ 
    expressNo: string, /*   */ 
    ext1: string, /*   */ 
    ext2: string, /*   */ 
    ext3: string, /*   */ 
    ext4: string, /*   */ 
    ext5: string, /*   */ 
    ext6: string, /*   */ 
    fromorderid: string, /*   */ 
    gift: string, /*   */ 
    goodscount: any, /*   */ 
    invoiceId: number, /*   int32*/ 
    isCombine: number, /*   int32*/ 
    isForward: number, /*   int32*/ 
    isLunchbox: number, /*   int32*/ 
    isPrint: number, /*   int32*/ 
    isQuan: number, /*   int32*/ 
    isSend: number, /*   int32*/ 
    isgroup: number, /*   int32*/ 
    kfBz: string, /*   */ 
    latitude: string, /*   */ 
    longitude: string, /*   */ 
    lunchboxPrice: any, /*   */ 
    machiningCost: any, /*   */ 
    marketId: string, /*   */ 
    merTrace: string, /*   */ 
    mobile: string, /*   */ 
    money: any, /*   */ 
    name: string, /*   */ 
    ordernum: string, /*   */ 
    ordertype: number, /*   int32*/ 
    overtimeDuty: string, /*   */ 
    payUserId: string, /*   */ 
    paymoney: any, /*   */ 
    paytime: string, /*   */ 
    peisong: string, /*   */ 
    plStatus: number, /*   int32*/ 
    printTime: string, /*   */ 
    probabilityActivityId: number, /*   int64*/ 
    productIds: string, /*   */ 
    quanId: string, /*   */ 
    rebatemoney: any, /*   */ 
    receiptDesc: string, /*   */ 
    receiptRemark: string, /*   */ 
    receiptTitle: string, /*   */ 
    rejectGoodsStatus: string, /*   */ 
    rejectHandletime: string, /*   */ 
    rejectImg: string, /*   */ 
    rejectRemark: string, /*   */ 
    rejectStatus: number, /*   int32*/ 
    rejectType: number, /*   int32*/ 
    reletStatus: number, /*   int32*/ 
    remainmoney: any, /*   */ 
    remindShipment: string, /*   */ 
    rid: number, /*   int64*/ 
    rip: string, /*   */ 
    senddate: string, /*   */ 
    sendfee: any, /*   */ 
    serial: string, /*   */ 
    serialflagno: string, /*   */ 
    serviceShopCode: string, /*   */ 
    serviceTime: string, /*   */ 
    shopId: string, /*   */ 
    sumLunchboxPrice: any, /*   */ 
    sumgoodsprice: any, /*   */ 
    sumpoints: number, /*   int64*/ 
    takegoodstime: string, /*   */ 
    tel: string, /*   */ 
    titles: string, /*   */ 
    toShopDistence: any, /*   */ 
    toUserDistence: any, /*   */ 
    umfFinish: number, /*   int32*/ 
    userId: number, /*   int32*/ 
    userMarkingGroupid: string, /*   */ 
    wxpaystr: string, /*   */ 
    zfType: string, /*   */ 
    ziStatus: number, /*   int32*/ 
    zip: string, /*   */ 
}

export interface IOrderRptReletExportResponse {
    activityMoney: any, /*   */ 
    activityStatus: number, /*   int32*/ 
    address: string, /*   */ 
    addressId: string, /*   */ 
    appdate: string, /*   */ 
    appuser: number, /*   int32*/ 
    buyShopCode: string, /*   */ 
    bz: string, /*   */ 
    cancelreason: string, /*   */ 
    cancleTime: string, /*   */ 
    carIds: string, /*   */ 
    changegoldStatus: number, /*   int32*/ 
    courier: string, /*   */ 
    ddStatus: number, /*   int32*/ 
    deliveryStatus: number, /*   int32*/ 
    discountMoney: any, /*   */ 
    dtime: string, /*   */ 
    email: string, /*   */ 
    enable: number, /*   int32*/ 
    expressCorp: string, /*   */ 
    expressNo: string, /*   */ 
    ext1: string, /*   */ 
    ext2: string, /*   */ 
    ext3: string, /*   */ 
    ext4: string, /*   */ 
    ext5: string, /*   */ 
    ext6: string, /*   */ 
    fromorderid: string, /*   */ 
    gift: string, /*   */ 
    goodscount: any, /*   */ 
    invoiceId: number, /*   int32*/ 
    isCombine: number, /*   int32*/ 
    isForward: number, /*   int32*/ 
    isLunchbox: number, /*   int32*/ 
    isPrint: number, /*   int32*/ 
    isQuan: number, /*   int32*/ 
    isSend: number, /*   int32*/ 
    isgroup: number, /*   int32*/ 
    kfBz: string, /*   */ 
    latitude: string, /*   */ 
    longitude: string, /*   */ 
    lunchboxPrice: any, /*   */ 
    machiningCost: any, /*   */ 
    marketId: string, /*   */ 
    merTrace: string, /*   */ 
    mobile: string, /*   */ 
    money: any, /*   */ 
    name: string, /*   */ 
    ordernum: string, /*   */ 
    ordertype: number, /*   int32*/ 
    overtimeDuty: string, /*   */ 
    payUserId: string, /*   */ 
    paymoney: any, /*   */ 
    paytime: string, /*   */ 
    peisong: string, /*   */ 
    plStatus: number, /*   int32*/ 
    printTime: string, /*   */ 
    probabilityActivityId: number, /*   int64*/ 
    productIds: string, /*   */ 
    quanId: string, /*   */ 
    rebatemoney: any, /*   */ 
    receiptDesc: string, /*   */ 
    receiptRemark: string, /*   */ 
    receiptTitle: string, /*   */ 
    rejectGoodsStatus: string, /*   */ 
    rejectHandletime: string, /*   */ 
    rejectImg: string, /*   */ 
    rejectRemark: string, /*   */ 
    rejectStatus: number, /*   int32*/ 
    rejectType: number, /*   int32*/ 
    reletStatus: number, /*   int32*/ 
    remainmoney: any, /*   */ 
    remindShipment: string, /*   */ 
    rid: number, /*   int64*/ 
    rip: string, /*   */ 
    senddate: string, /*   */ 
    sendfee: any, /*   */ 
    serial: string, /*   */ 
    serialflagno: string, /*   */ 
    serviceShopCode: string, /*   */ 
    serviceTime: string, /*   */ 
    shopId: string, /*   */ 
    sumLunchboxPrice: any, /*   */ 
    sumgoodsprice: any, /*   */ 
    sumpoints: number, /*   int64*/ 
    takegoodstime: string, /*   */ 
    tel: string, /*   */ 
    titles: string, /*   */ 
    toShopDistence: any, /*   */ 
    toUserDistence: any, /*   */ 
    umfFinish: number, /*   int32*/ 
    userId: number, /*   int32*/ 
    userMarkingGroupid: string, /*   */ 
    wxpaystr: string, /*   */ 
    zfType: string, /*   */ 
    ziStatus: number, /*   int32*/ 
    zip: string, /*   */ 
}

/**  
 * @description 取消订单报表
*/
export function orderRptCancel(): IBase<array> {
	return request({
		method: 'GET',
		url: `/order/rpt/cancel`, 
	});
}

/**  
 * @description 取消订单合计报表
*/
export function orderRptCancelCount(): IBase<array> {
	return request({
		method: 'GET',
		url: `/order/rpt/cancel/count`, 
	});
}

/**  
 * @description 导出取消的订单
*/
export function orderRptCancelExport(): IBasePage<IOrderRptCancelExportResponse[]> {
	return request({
		method: 'GET',
		url: `/order/rpt/cancel/export`, 
	});
}

/**  
 * @description 到期设备报表
*/
export function orderRptExpire(): IBase<array> {
	return request({
		method: 'GET',
		url: `/order/rpt/expire`, 
	});
}

/**  
 * @description 到期设备明细
*/
export function orderRptExpireDetail(): IBase<array> {
	return request({
		method: 'GET',
		url: `/order/rpt/expire/detail`, 
	});
}

/**  
 * @description 退货订单报表
*/
export function orderRptReject(): IBase<array> {
	return request({
		method: 'GET',
		url: `/order/rpt/reject`, 
	});
}

/**  
 * @description 退货订单报表
*/
export function orderRptRejectCount(): IBase<array> {
	return request({
		method: 'GET',
		url: `/order/rpt/reject/count`, 
	});
}

/**  
 * @description 导出退货的订单
*/
export function orderRptRejectExport(): IBasePage<IOrderRptRejectExportResponse[]> {
	return request({
		method: 'GET',
		url: `/order/rpt/reject/export`, 
	});
}

/**  
 * @description 导出续租的订单
*/
export function orderRptReletExport(): IBasePage<IOrderRptReletExportResponse[]> {
	return request({
		method: 'GET',
		url: `/order/rpt/relet/export`, 
	});
}
