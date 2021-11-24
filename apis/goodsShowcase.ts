/**
 * @Title goodsShowcase
 * @description test商城-商品推荐
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface IMallGoodsShowcaseQueryResponse {
    goodsName: string, /* 商品名称  */ 
    id: number, /* 推荐ID  int32*/ 
    image: string, /* 商品缩略图  */ 
    isParts: number, /* 商品类型：0普通商品，1配件商品  int32*/ 
    sort: number, /* 排序字段  int32*/ 
    typeName: string, /* 分类名称  */ 
}

/**  
 * @description 新增
*/
export function mallGoodsShowcaseAdd(): IBase<number> {
	return request({
		method: 'POST',
		url: `/mall/goodsShowcase/add`, 
	});
}

/**  
 * @description 根据ID删除
*/
export function mallGoodsShowcaseDelete(): IBase<number> {
	return request({
		method: 'GET',
		url: `/mall/goodsShowcase/delete`, 
	});
}

/**  
 * @description 分页查询
*/
export function mallGoodsShowcaseQuery(): IBasePage<IMallGoodsShowcaseQueryResponse[]> {
	return request({
		method: 'GET',
		url: `/mall/goodsShowcase/query`, 
	});
}
