/**
 * @Title discoveryInfoComment
 * @description 发现模块评论信息
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface IDiscoveryInfoCommentGetResponse {
    checkTime: string, /* 审核时间  date-time*/ 
    checkUser: string, /* 审核用户  */ 
    commentStatus: number, /* 评论的状态(0审核不通过, 1已审核通过, 2待审核)  int32*/ 
    comments: string, /* 评论内容  */ 
    createTime: string, /* 评论时间  date-time*/ 
    createUser: string, /* 评论用户  */ 
    curUser: string, /*   */ 
    discoveryInfoId: string, /* 文章ID  */ 
    id: number, /*   int64*/ 
    isDesensitization: any, /* 是否开启手机号码过滤  */ 
    isSys: number, /* 是否系统回复  int32*/ 
    replyComments: string, /* 回复内容  */ 
    replyStatus: number, /* 是否已读  int32*/ 
    replyTime: string, /* 回复时间  date-time*/ 
    replyUserId: string, /* 回复人ID  */ 
    replyUserName: string, /* 回复人姓名  */ 
}

export interface IDiscoveryInfoCommentQueryResponse {
    checkTime: string, /* 审核时间  date-time*/ 
    checkUser: string, /* 审核用户  */ 
    commentStatus: number, /* 评论的状态(0审核不通过, 1已审核通过, 2待审核)  int32*/ 
    comments: string, /* 评论内容  */ 
    coverDesc: string, /* 文章简介  */ 
    createTime: string, /* 评论时间  date-time*/ 
    createUser: string, /* 评论用户  */ 
    createUserName: string, /* 评论人姓名  */ 
    discoveryInfoId: string, /* 文章ID  */ 
    discoveryUrl: string, /* 文章地址  */ 
    id: number, /*   int64*/ 
    isSys: number, /* 是否系统回复  int32*/ 
    replyComments: string, /* 回复内容  */ 
    replyStatus: number, /* 是否已读  int32*/ 
    replyTime: string, /* 回复时间  date-time*/ 
    replyUserId: string, /* 回复人ID  */ 
    replyUserName: string, /* 回复人姓名  */ 
    userHead: string, /* 头像  */ 
    userPhone: string, /* 电话  */ 
    userRoleName: string, /* 用户角色  */ 
}

/**  
 * @description 管理员用户回复评论
*/
export function discoveryInfoCommentAddCommentSys(): IBase<any> {
	return request({
		method: 'POST',
		url: `/discoveryInfoComment/addCommentSys`, 
	});
}

/**  
 * @description 管理员用户审核评论
*/
export function discoveryInfoCommentCheck(): IBase<any> {
	return request({
		method: 'POST',
		url: `/discoveryInfoComment/check`, 
	});
}

/**  
 * @description 根据ID删除 -- 根据主键删除
*/
export function discoveryInfoCommentDelete(): IBase<any> {
	return request({
		method: 'GET',
		url: `/discoveryInfoComment/delete`, 
	});
}

/**  
 * @description 根据ID删除 -- 根据主键删除
*/
export function discoveryInfoCommentDeleteReply(): IBase<any> {
	return request({
		method: 'GET',
		url: `/discoveryInfoComment/deleteReply`, 
	});
}

/**  
 * @description 根据ID获取详细信息
*/
export function discoveryInfoCommentGet(): IBase<IDiscoveryInfoCommentGetResponse> {
	return request({
		method: 'GET',
		url: `/discoveryInfoComment/get`, 
	});
}

/**  
 * @description 分页查询
*/
export function discoveryInfoCommentQuery(): IBasePage<IDiscoveryInfoCommentQueryResponse[]> {
	return request({
		method: 'GET',
		url: `/discoveryInfoComment/query`, 
	});
}
