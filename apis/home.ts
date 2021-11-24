/**
 * @Title home
 * @description 首页
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface IHomeCustomerCountWeekResponse {
    customerCount: number, /* 新增客户量  int32*/ 
    weekDay: number, /* /**周一/二...**/  int32*/ 
}

export interface IHomeDeviceCountResponse {
    deviceCount: number, /* 设备量  int32*/ 
    provinceCode: string, /* 省代码  */ 
}

export interface IHomeReportCountAgeResponse {
    reportCountA: number, /* 18以内年龄段检测量  int32*/ 
    reportCountB: number, /* 18-30年龄段检测量  int32*/ 
    reportCountC: number, /* 30-40年龄段检测量  int32*/ 
    reportCountD: number, /* 40-50年龄段检测量  int32*/ 
    reportCountE: number, /* 50-60年龄段检测量  int32*/ 
    reportCountF: number, /* 60以上年龄段检测量  int32*/ 
}

export interface IHomeReportCountMonthResponse {
    month: number, /* /**一月/二月...**/  int32*/ 
    reportCount: number, /* 拍摄量  int32*/ 
}

export interface IHomeReportCountSexResponse {
    femaleReportCount: number, /* 女性检测数量  int32*/ 
    maleReportCount: number, /* 男性检测数量  int32*/ 
}

export interface IHomeReportCountSymptomResponse {
    symptom: number, /* 症状信息:0 油脂（粉刺）1浅层色素（表素）2紫外色素（深斑）3毛孔；4敏感度；5皱纹  int32*/ 
    symptomCount: number, /* 症状严重数量  int32*/ 
    totCount: number, /* 症状总数量  int32*/ 
}

export interface IReportCountLastWeekResponses {
    reportCount: number, /* 拍摄量  int32*/ 
    weekDay: number, /* /**周日(0)/周一(1)...**/  int32*/ 
}

export interface IReportCountWeekResponses {
    reportCount: number, /* 拍摄量  int32*/ 
    weekDay: number, /* /**周日(0)/周一(1)...**/  int32*/ 
}

export interface IHomeReportCountWeekResponse {
    reportCountLastWeekResponses: IReportCountLastWeekResponses[], /* 上周案例  */ 
    reportCountWeekResponses: IReportCountWeekResponses[], /* 本周案例  */ 
}

/**  
 * @description 客户总量统计
*/
export function homeCustomerCount(): IBase<number> {
	return request({
		method: 'GET',
		url: `/home/customer/count`, 
	});
}

/**  
 * @description 本周新增客户统计
*/
export function homeCustomerCountWeek(): IBasePage<IHomeCustomerCountWeekResponse[]> {
	return request({
		method: 'GET',
		url: `/home/customer/count/week`, 
	});
}

/**  
 * @description 各省份设备量统计
*/
export function homeDeviceCount(): IBasePage<IHomeDeviceCountResponse[]> {
	return request({
		method: 'GET',
		url: `/home/device/count`, 
	});
}

/**  
 * @description 拍摄总量统计
*/
export function homeReportCount(): IBase<number> {
	return request({
		method: 'GET',
		url: `/home/report/count`, 
	});
}

/**  
 * @description 拍摄总量年龄段占比统计
*/
export function homeReportCountAge(): IBase<IHomeReportCountAgeResponse> {
	return request({
		method: 'GET',
		url: `/home/report/count/age`, 
	});
}

/**  
 * @description 最近12个月拍摄量
*/
export function homeReportCountMonth(): IBasePage<IHomeReportCountMonthResponse[]> {
	return request({
		method: 'GET',
		url: `/home/report/count/month`, 
	});
}

/**  
 * @description 拍摄总量性别占比统计
*/
export function homeReportCountSex(): IBase<IHomeReportCountSexResponse> {
	return request({
		method: 'GET',
		url: `/home/report/count/sex`, 
	});
}

/**  
 * @description 症状严重程度比
*/
export function homeReportCountSymptom(): IBasePage<IHomeReportCountSymptomResponse[]> {
	return request({
		method: 'GET',
		url: `/home/report/count/symptom`, 
	});
}

/**  
 * @description 最近一周拍摄量(含同比)
*/
export function homeReportCountWeek(): IBase<IHomeReportCountWeekResponse> {
	return request({
		method: 'GET',
		url: `/home/report/count/week`, 
	});
}
