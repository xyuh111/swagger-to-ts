/**
 * @Title freightTemplate
 * @description test商城-运费模版
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IMallFreightTemplateDeleteParams {
    id: number; /* id  int32*/ 
}

export interface IMallFreightTemplateGetParams {
    id: number; /* id  int32*/ 
}

export interface IMallFreightTemplateQueryParams {
    page: number; /* page  int32*/ 
    pageSize: number; /* pageSize  int32*/ 
}

export interface IMallFreightTemplateQueryByFreightIdParams {
    freightId: number; /* freightId  int32*/ 
}

export interface IMallFreightTemplateUpdateParams {
    id: number; /* id  int32*/ 
}
/*
 * 响应接口
*/
export interface IFreightDistModeResponse {
    firstAmt: number, /* 首件费用  int32*/ 
    firstPiece: number, /* 首件数量  int32*/ 
    isDefault: any, /* 是否默认(一个模版有且仅有一条默认数据)  */ 
    regionCodes: string, /* 省代码  */ 
    secondAmt: number, /* 续件费用  int32*/ 
    secondPiece: number, /* 续件数量  int32*/ 
}

export interface IFreightFreeResponse {
    freePiece: number, /* 包邮件数  int32*/ 
    regionCodes: string, /* 省代码  */ 
}

export interface IMallFreightTemplateGetResponse {
    freightDistModeResponse: IFreightDistModeResponse[], /* 配送省份收费表  */ 
    freightFreeResponse: IFreightFreeResponse[], /* 包邮条件  */ 
    id: number, /* ID  int32*/ 
    isInclPostage: any, /* 是否包邮  */ 
    isInclPostageByif: any, /* 是否指定条件包邮  */ 
    templateName: string, /* 模版名称  */ 
}

export interface IMallFreightTemplateQueryResponse {
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    id: number, /*   int32*/ 
    isInclPostage: any, /*   */ 
    isInclPostageByif: any, /*   */ 
    templateName: string, /*   */ 
}

export interface IMallFreightTemplateQueryByFreightIdResponse {
    id: number, /* ID  int64*/ 
    image: string, /* 缩略图  */ 
    isParts: number, /* 商品类型：0普通商品，1配件商品  int32*/ 
    marketPrice: any, /* 市场价格  */ 
    name: string, /* 商品名称  */ 
    typeName: string, /* 商品分类  */ 
}

/**  
 * @description 新增
*/
export function mallFreightTemplateAdd(): IBase<number> {
	return request({
		method: 'POST',
		url: `/mall/freightTemplate/add`, 
	});
}

/**  
 * @description 根据ID删除
*/
export function mallFreightTemplateDelete(data: IMallFreightTemplateDeleteParams): IBase<number> {
	return request({
		method: 'GET',
		url: `/mall/freightTemplate/delete/${data.id}`, 
	});
}

/**  
 * @description 根据ID获取详细信息
*/
export function mallFreightTemplateGet(data: IMallFreightTemplateGetParams): IBase<IMallFreightTemplateGetResponse> {
	return request({
		method: 'GET',
		url: `/mall/freightTemplate/get/${data.id}`, 
	});
}

/**  
 * @description 查询运费模版信息
*/
export function mallFreightTemplateQuery(data: IMallFreightTemplateQueryParams): IBasePage<IMallFreightTemplateQueryResponse[]> {
	return request({
		method: 'POST',
		url: `/mall/freightTemplate/query/${data.page}/${data.pageSize}`, 
		data: data
	});
}

/**  
 * @description 根据运费模版ID查询商品信息
*/
export function mallFreightTemplateQueryByFreightId(data: IMallFreightTemplateQueryByFreightIdParams): IBasePage<IMallFreightTemplateQueryByFreightIdResponse[]> {
	return request({
		method: 'GET',
		url: `/mall/freightTemplate/queryByFreightId/${data.freightId}`, 
	});
}

/**  
 * @description 修改
*/
export function mallFreightTemplateUpdate(data: IMallFreightTemplateUpdateParams): IBase<number> {
	return request({
		method: 'POST',
		url: `/mall/freightTemplate/update/${data.id}`, 
		data: data
	});
}
