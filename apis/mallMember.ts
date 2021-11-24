/**
 * @Title mallMember
 * @description test商城-会员统计
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IMallMemberUpdatePayPwdParams {
    userId: number; /* userId  int32*/ 
    pwd: string; /* pwd  */ 
}

export interface IMallMemberUpdateProxyParams {
    userId: number; /* userId  int32*/ 
    proxyId: number; /* proxyId  int32*/ 
}

/**  
 * @description 分页查询
*/
export function mallMemberQuery(): IBase<array> {
	return request({
		method: 'POST',
		url: `/mall/member/query`, 
	});
}

/**  
 * @description 查询子级成员 -- 分页查询
*/
export function mallMemberQuerySub(): IBase<array> {
	return request({
		method: 'POST',
		url: `/mall/member/querySub`, 
	});
}

/**  
 * @description 修改支付密码
*/
export function mallMemberUpdatePayPwd(data: IMallMemberUpdatePayPwdParams): IBase<any> {
	return request({
		method: 'GET',
		url: `/mall/member/update/payPwd/${data.userId}/${data.pwd}`, 
	});
}

/**  
 * @description 后台-更新分销等级
*/
export function mallMemberUpdateProxy(data: IMallMemberUpdateProxyParams): IBase<any> {
	return request({
		method: 'GET',
		url: `/mall/member/update/proxy/${data.userId}/${data.proxyId}`, 
	});
}
