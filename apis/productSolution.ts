/**
 * @Title productSolution
 * @description 方案管理
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IProductSolutionAddProductSolution_batchParams {
    productSolutionFile: any; /* productSolutionFile  */ 
}
/*
 * 响应接口
*/
export interface IProductSolutionGetProductSolutionResponse {
    crtId: string, /*   */ 
    crtTime: string, /*   date-time*/ 
    delFlg: number, /*   int32*/ 
    priority: number, /*   int32*/ 
    proSolutionId: number, /*   int32*/ 
    proSolutionName: string, /*   */ 
    reason: string, /*   */ 
    recommendedProducts: string, /*   */ 
    roleId: string, /*   */ 
    testAge: number, /*   int32*/ 
    updId: string, /*   */ 
    updTime: string, /*   date-time*/ 
}

export interface IProductList {
    crtId: string, /*   */ 
    crtTime: string, /*   date-time*/ 
    delFlg: number, /*   int32*/ 
    proName: string, /*   */ 
    proNumber: string, /*   */ 
    proPic: string, /*   */ 
    proPrice: any, /*   */ 
    proReason: string, /*   */ 
    proUuid: string, /*   */ 
    updId: string, /*   */ 
    updTime: string, /*   date-time*/ 
    userUuid: string, /*   */ 
    version: number, /*   int32*/ 
}

export interface IProductSolutionSingleList {
    attribute: number, /*   int32*/ 
    proSolSingleId: number, /*   int32*/ 
    proSolutionId: number, /*   int32*/ 
    scopRelationship: number, /*   int32*/ 
    value: any, /*   float*/ 
}

export interface IProductSolutionGetProductSolutionDetailResponse {
    crtId: string, /*   */ 
    crtTime: string, /*   date-time*/ 
    delFlg: number, /*   int32*/ 
    priority: number, /*   int32*/ 
    proSolutionId: number, /*   int32*/ 
    proSolutionName: string, /*   */ 
    productList: IProductList[], /*   */ 
    productSolutionSingleList: IProductSolutionSingleList[], /*   */ 
    reason: string, /*   */ 
    recommendedProducts: string, /*   */ 
    roleId: string, /*   */ 
    testAge: number, /*   int32*/ 
    updId: string, /*   */ 
    updTime: string, /*   date-time*/ 
}

/**  
 * @description 批量添加方案
*/
export function productSolutionAddProductSolution_batch(data: IProductSolutionAddProductSolution_batchParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/productSolution/addProductSolution/_batch`, 
		params: data
	});
}

/**  
 * @description 删除解决方案
*/
export function productSolutionDeleteProductSolution(): IBase<any> {
	return request({
		method: 'GET',
		url: `/productSolution/deleteProductSolution`, 
	});
}

/**  
 * @description 查询解决方案
*/
export function productSolutionGetProductSolution(): IBasePage<IProductSolutionGetProductSolutionResponse[]> {
	return request({
		method: 'GET',
		url: `/productSolution/getProductSolution`, 
	});
}

/**  
 * @description 查询方案详情
*/
export function productSolutionGetProductSolutionDetail(): IBase<IProductSolutionGetProductSolutionDetailResponse> {
	return request({
		method: 'GET',
		url: `/productSolution/getProductSolution/Detail`, 
	});
}
