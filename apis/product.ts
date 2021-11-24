/**
 * @Title product
 * @description 产品
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IProductSaveProductParams {
    productPicFile: any; /* productPicFile  */ 
}

export interface IProductUpdateProductParams {
    productPicFile: any; /* productPicFile  */ 
}
/*
 * 响应接口
*/
export interface IProductSymptomList {
    degree: number, /*   int32*/ 
    proSymId: number, /*   int32*/ 
    proUuid: string, /*   */ 
    symptom: number, /*   int32*/ 
    sysDegree: string, /*   */ 
}

export interface IProductGetProductResponse {
    crtId: string, /*   */ 
    crtTime: string, /*   date-time*/ 
    degree: number, /*   int32*/ 
    delFlg: number, /*   int32*/ 
    proName: string, /*   */ 
    proNumber: string, /*   */ 
    proPic: string, /*   */ 
    proPrice: any, /*   */ 
    proReason: string, /*   */ 
    proUuid: string, /*   */ 
    productSymptomList: IProductSymptomList[], /*   */ 
    productSymptoms: string, /*   */ 
    symptom: number, /*   int32*/ 
    updId: string, /*   */ 
    updTime: string, /*   date-time*/ 
    userName: string, /*   */ 
    userUuid: string, /*   */ 
    version: number, /*   int32*/ 
}

export interface IProductGetProductByIdResponse {
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

export interface IProductGetProductSymptomByIdResponse {
    degree: number, /*   int32*/ 
    proSymId: number, /*   int32*/ 
    proUuid: string, /*   */ 
    symptom: number, /*   int32*/ 
    sysDegree: string, /*   */ 
}

/**  
 * @description 复制产品
*/
export function productCopyProduct(): IBase<any> {
	return request({
		method: 'GET',
		url: `/product/copyProduct`, 
	});
}

/**  
 * @description 复制产品
*/
export function productCopyProductTarget(): IBase<any> {
	return request({
		method: 'GET',
		url: `/product/copyProductTarget`, 
	});
}

/**  
 * @description 删除产品
*/
export function productDeleteProduct(): IBase<any> {
	return request({
		method: 'GET',
		url: `/product/deleteProduct`, 
	});
}

/**  
 * @description 查询产品
*/
export function productGetProduct(): IBasePage<IProductGetProductResponse[]> {
	return request({
		method: 'GET',
		url: `/product/getProduct`, 
	});
}

/**  
 * @description 通过id查询产品
*/
export function productGetProductById(): IBase<IProductGetProductByIdResponse> {
	return request({
		method: 'GET',
		url: `/product/getProductById`, 
	});
}

/**  
 * @description 通过id查询产品症状
*/
export function productGetProductSymptomById(): IBasePage<IProductGetProductSymptomByIdResponse[]> {
	return request({
		method: 'GET',
		url: `/product/getProductSymptomById`, 
	});
}

/**  
 * @description 添加产品
*/
export function productSaveProduct(data: IProductSaveProductParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/product/saveProduct`, 
		params: data
	});
}

/**  
 * @description 修改产品
*/
export function productUpdateProduct(data: IProductUpdateProductParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/product/updateProduct`, 
		params: data
	});
}
