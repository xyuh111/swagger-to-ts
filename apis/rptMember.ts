/**
 * @Title rptMember
 * @description 合伙人统计
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	
/**  
 * @description 合伙人月度增长分析
*/
export function memberRptGrowth(): IBase<array> {
	return request({
		method: 'POST',
		url: `/member/rpt/growth`, 
	});
}

/**  
 * @description 合伙人销售分析
*/
export function memberRptSales(): IBase<array> {
	return request({
		method: 'POST',
		url: `/member/rpt/sales`, 
	});
}
