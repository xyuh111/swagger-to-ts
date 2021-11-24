/**
 * @Title feedback
 * @description 反馈表数据相关api
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface IFeedbackGetFeedbackResponse {
    crtId: string, /*   */ 
    crtTime: string, /*   date-time*/ 
    delFlg: number, /*   int32*/ 
    febContact: string, /*   */ 
    febContent: string, /*   */ 
    febUuid: string, /*   */ 
    roleName: string, /*   */ 
    updId: string, /*   */ 
    updTime: string, /*   date-time*/ 
    userDevnumber: string, /*   */ 
    userName: string, /*   */ 
    userUuid: string, /*   */ 
    version: number, /*   int32*/ 
}

/**  
 * @description 删除反馈信息
*/
export function feedbackDeleteByPrimaryKey(): IBase<number> {
	return request({
		method: 'GET',
		url: `/feedback/deleteByPrimaryKey`, 
	});
}

/**  
 * @description 查询反馈信息
*/
export function feedbackGetFeedback(): IBasePage<IFeedbackGetFeedbackResponse[]> {
	return request({
		method: 'GET',
		url: `/feedback/getFeedback`, 
	});
}
