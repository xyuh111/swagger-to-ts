/**
 * @Title mallDianping
 * @description test商城-评论信息
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IMallDianpingDeleteParams {
    id: number; /* id  int64*/ 
}

export interface IMallDianpingQueryParams {
    page: number; /* page  int32*/ 
    pageSize: number; /* pageSize  int32*/ 
}
/*
 * 响应接口
*/
export interface IMallDianpingQueryResponse {
    appdate: string, /* 点评时间  */ 
    avatar: string, /* 头像  */ 
    dtype: number, /* 得分(星星)  int32*/ 
    id: number, /*   int64*/ 
    nick: string, /* 昵称  */ 
    picUrls: string, /* 点评图片  */ 
    text: string, /* 点评内容  */ 
}

/**  
 * @description 删除评论
*/
export function mallDianpingDelete(data: IMallDianpingDeleteParams): IBase<number> {
	return request({
		method: 'GET',
		url: `/mall/dianping/delete/${data.id}`, 
	});
}

/**  
 * @description 分页查询所有评论
*/
export function mallDianpingQuery(data: IMallDianpingQueryParams): IBasePage<IMallDianpingQueryResponse[]> {
	return request({
		method: 'GET',
		url: `/mall/dianping/query/${data.page}/${data.pageSize}`, 
	});
}
