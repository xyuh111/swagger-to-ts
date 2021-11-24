/**
 * @Title message
 * @description 消息中心
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface IMessageGetMessagesResponse {
    crtTime: string, /*   date-time*/ 
    delFlg: number, /*   int32*/ 
    msgContent: string, /*   */ 
    msgId: string, /*   */ 
    msgIntroduction: string, /*   */ 
    msgSource: number, /*   int32*/ 
    msgTitle: string, /*   */ 
    msgType: number, /*   int32*/ 
    msgUrl: string, /*   */ 
    msgUserid: string, /*   */ 
    msgUsername: string, /*   */ 
    updId: string, /*   */ 
    updTime: string, /*   date-time*/ 
    userRole: number, /*   int32*/ 
    version: number, /*   int32*/ 
}

/**  
 * @description 新增消息
*/
export function messageAddMessage(): IBase<number> {
	return request({
		method: 'POST',
		url: `/message/addMessage`, 
	});
}

/**  
 * @description 删除消息信息
*/
export function messageDeleteMessage(): IBase<number> {
	return request({
		method: 'GET',
		url: `/message/deleteMessage`, 
	});
}

/**  
 * @description 查询消息信息
*/
export function messageGetMessages(): IBasePage<IMessageGetMessagesResponse[]> {
	return request({
		method: 'GET',
		url: `/message/getMessages`, 
	});
}

/**  
 * @description 修改消息
*/
export function messageUpdateMessage(): IBase<number> {
	return request({
		method: 'POST',
		url: `/message/updateMessage`, 
	});
}
