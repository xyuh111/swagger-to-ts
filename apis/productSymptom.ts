/**
 * @Title productSymptom
 * @description 产品症状
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface IProductSymptomGetProductSymptomResponse {
    degree: number, /*   int32*/ 
    proSymId: number, /*   int32*/ 
    proUuid: string, /*   */ 
    symptom: number, /*   int32*/ 
    sysDegree: string, /*   */ 
}

export interface IProductSymptomGetProductSymptomByIdResponse {
    degree: number, /*   int32*/ 
    proSymId: number, /*   int32*/ 
    proUuid: string, /*   */ 
    symptom: number, /*   int32*/ 
    sysDegree: string, /*   */ 
}

/**  
 * @description 新增产品症状
*/
export function productSymptomAddProductSymptom(): IBase<any> {
	return request({
		method: 'POST',
		url: `/productSymptom/addProductSymptom`, 
	});
}

/**  
 * @description 删除产品症状
*/
export function productSymptomDeleteProductSymptom(): IBase<any> {
	return request({
		method: 'POST',
		url: `/productSymptom/deleteProductSymptom`, 
	});
}

/**  
 * @description 查询产品症状
*/
export function productSymptomGetProductSymptom(): IBasePage<IProductSymptomGetProductSymptomResponse[]> {
	return request({
		method: 'POST',
		url: `/productSymptom/getProductSymptom`, 
	});
}

/**  
 * @description 通过id查询产品症状
*/
export function productSymptomGetProductSymptomById(): IBase<IProductSymptomGetProductSymptomByIdResponse> {
	return request({
		method: 'POST',
		url: `/productSymptom/getProductSymptomById`, 
	});
}

/**  
 * @description 修改产品症状
*/
export function productSymptomUpdateProductSymptom(): IBase<any> {
	return request({
		method: 'POST',
		url: `/productSymptom/updateProductSymptom`, 
	});
}
