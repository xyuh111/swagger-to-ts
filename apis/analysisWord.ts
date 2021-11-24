/**
 * @Title analysisWord
 * @description 症状话术
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface IAnalysisWordGetAnalysisWordResponse {
    id: number, /*   int32*/ 
    plan: string, /*   */ 
    ratioId: number, /*   int32*/ 
    reason: string, /*   */ 
    roleId: number, /*   int32*/ 
    symptom: number, /*   int32*/ 
    word: string, /*   */ 
}

export interface IAnalysisWordTemplate_downloadResponse {
}

/**  
 * @description 删除症状话术
*/
export function analysisWordDeleteAnalysisWord(): IBase<any> {
	return request({
		method: 'GET',
		url: `/analysisWord/deleteAnalysisWord`, 
	});
}

/**  
 * @description 查询症状话术
*/
export function analysisWordGetAnalysisWord(): IBasePage<IAnalysisWordGetAnalysisWordResponse[]> {
	return request({
		method: 'GET',
		url: `/analysisWord/getAnalysisWord`, 
	});
}

/**  
 * @description 添加症状话术
*/
export function analysisWordInsertAnalysisWord(): IBase<any> {
	return request({
		method: 'POST',
		url: `/analysisWord/insertAnalysisWord`, 
	});
}

/**  
 * @description 批量添加症状话术
*/
export function analysisWordInsertBatchAnalysisWord(): IBase<any> {
	return request({
		method: 'POST',
		url: `/analysisWord/insertBatchAnalysisWord`, 
	});
}

/**  
 * @description 话术模板下载
*/
export function analysisWordTemplate_download(): IBase<undefined> {
	return request({
		method: 'GET',
		url: `/analysisWord/template/_download`, 
	});
}

/**  
 * @description 更新症状话术
*/
export function analysisWordUpdateAnalysisWord(): IBase<any> {
	return request({
		method: 'POST',
		url: `/analysisWord/updateAnalysisWord`, 
	});
}
