/**
 * @Title rptDevice
 * @description 设备报表
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface IRptDeviceQuerySumResponse {
    deviceCount: number, /* 设备数量  int64*/ 
    oemId: number, /* 所属机构  int32*/ 
    summaryDate: string, /* 统计日期  */ 
}

/**  
 * @description 设备总量分析
*/
export function rptDeviceQuerySum(): IBasePage<IRptDeviceQuerySumResponse[]> {
	return request({
		method: 'POST',
		url: `/rpt/device/querySum`, 
	});
}
