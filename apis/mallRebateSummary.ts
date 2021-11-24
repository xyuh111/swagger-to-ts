/**
 * @Title mallRebateSummary
 * @description test商城-返利查询
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	
/**  
 * @description 分页查询
*/
export function mallRebateSummaryQuery(): IBase<array> {
	return request({
		method: 'POST',
		url: `/mall/rebateSummary/query`, 
	});
}
