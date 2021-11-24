/**
 * @Title report
 * @description 报告
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IReportGetReportByIdParams {
    id: string; /* id  */ 
}

export interface IReportQueryParams {
    cusId: string; /* cusId  */ 
    page: number; /* page  int32*/ 
    pageSize: number; /* pageSize  int32*/ 
}
/*
 * 响应接口
*/
export interface IReportGetReportByCusPicResponse {
    age: number, /* 年龄  int32*/ 
    comment: string, /* 评论  */ 
    overallScore: any, /* 综合得分  float*/ 
    reportCreatTime: string, /* 报告时间  date-time*/ 
    skinAge: number, /* 肌肤年龄  int32*/ 
    skinColour: number, /* 用户肤色  int32*/ 
    symptomMap: any, /* 症状信息  */ 
}

export interface IReportGetReportByIdResponse {
    comment: string, /*   */ 
    complexion: number, /*   int32*/ 
    createTime: string, /*   date-time*/ 
    cusAge: number, /*   int32*/ 
    cusSex: number, /*   int32*/ 
    customerId: string, /*   */ 
    customerPicId: string, /*   */ 
    direction: number, /*   int32*/ 
    extra: string, /*   */ 
    id: string, /*   */ 
    oemId: number, /*   int32*/ 
    sourcePics: any, /*   */ 
    symptoms: any, /*   */ 
    synAge: number, /*   int32*/ 
    synScore: any, /*   float*/ 
    uid: string, /*   */ 
    updateTime: string, /*   date-time*/ 
}

export interface IReportQueryResponse {
    createTime: string, /*   date-time*/ 
    customerPicId: string, /*   */ 
    id: string, /*   */ 
}

/**  
 * @description 根据拍摄照片获取报告信息
*/
export function reportGetReportByCusPic(): IBase<IReportGetReportByCusPicResponse> {
	return request({
		method: 'GET',
		url: `/report/getReportByCusPic`, 
	});
}

/**  
 * @description 根据报告ID获取报告信息
*/
export function reportGetReportById(data: IReportGetReportByIdParams): IBase<IReportGetReportByIdResponse> {
	return request({
		method: 'GET',
		url: `/report/getReportById/${data.id}`, 
	});
}

/**  
 * @description 查询客户图片信息
*/
export function reportQuery(data: IReportQueryParams): IBasePage<IReportQueryResponse[]> {
	return request({
		method: 'GET',
		url: `/report/query/${data.cusId}/${data.page}/${data.pageSize}`, 
	});
}
