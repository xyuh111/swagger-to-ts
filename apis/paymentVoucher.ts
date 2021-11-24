/**
 * @Title paymentVoucher
 * @description test商城-财务付款单
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface IMallPaymentVoucherQueryResponse {
    checkTime: string, /* 审核时间  date-time*/ 
    checkUser: string, /* 审核用户  */ 
    createTime: string, /* 申请时间  date-time*/ 
    id: number, /*   int64*/ 
    orderId: string, /* 订单编号  */ 
    payAmt: any, /* 付款金额(押金+服务费)  */ 
    payType: number, /* 付款方式(1原路返还,2绑定银行卡,3余额)  int32*/ 
    payeeName: string, /* 收款人姓名  */ 
    pledgeMoney: any, /* 押金  */ 
    serviceFee: any, /* 服务费  */ 
    voucherNum: string, /* 付款单号  */ 
    voucherStatus: number, /* 状态(1待审核,2审核通过,3审核拒绝)  int32*/ 
    voucherType: number, /* 单据类型(1退款,2提现)  int32*/ 
}

/**  
 * @description 审核付款单
*/
export function mallPaymentVoucherCheck(): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/paymentVoucher/check`, 
	});
}

/**  
 * @description 分页查询
*/
export function mallPaymentVoucherQuery(): IBasePage<IMallPaymentVoucherQueryResponse[]> {
	return request({
		method: 'POST',
		url: `/mall/paymentVoucher/query`, 
	});
}
