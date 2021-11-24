/**
 * @Title goods
 * @description test商城-商品信息
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 请求接口
*/
export interface IMallGoodsCountByFreightIdParams {
    freightId: number; /* freightId  int32*/ 
}

export interface IMallGoodsGetDetailParams {
    id: number; /* id  int32*/ 
}

export interface IMallGoodsQueryParams {
    page: number; /* page  int32*/ 
    pageSize: number; /* pageSize  int32*/ 
}

export interface IMallGoodsQueryByFreightIdParams {
    freightId: number; /* freightId  int32*/ 
}

export interface IMallGoodsUpdateParams {
    id: number; /* id  int64*/ 
}

export interface IMallGoodsUpdateStatusParams {
    id: number; /* id  int64*/ 
    status: number; /* status  int32*/ 
}

export interface IMallGoodsUploadImgParams {
    img: any; /* img  */ 
}

export interface IMallGoodsUploadVideoParams {
    video: any; /* video  */ 
}
/*
 * 响应接口
*/
export interface IMallGoodsChooseQueryResponse {
    id: number, /* ID  int64*/ 
    image: string, /* 缩略图  */ 
    isParts: number, /* 商品类型：0普通商品，1配件商品  int32*/ 
    marketPrice: any, /* 市场价格  */ 
    name: string, /* 商品名称  */ 
    typeName: string, /* 商品分类  */ 
}

export interface IGoodsQueryDetailProductSpecs {
    productId: number, /*   int64*/ 
    specId: number, /* 规格ID  int32*/ 
    specValueId: number, /* 规格值ID  int32*/ 
}

export interface IGoodsQueryDetailProducts {
    buyPrice: any, /* 续租价格  */ 
    goodsQueryDetailProductSpecs: IGoodsQueryDetailProductSpecs[], /* 产品规格  */ 
    limitCount: number, /* 限购数量  int32*/ 
    mktPrice: any, /* 市场价格  */ 
    price: any, /* 销售价格  */ 
    productId: number, /* 产品ID  int64*/ 
    productPics: string, /* 图片  */ 
    store: number, /* 库存  int32*/ 
    vip1Rebate: any, /* 上上级返利  */ 
    vip2Rebate: any, /* 上级返利  */ 
    vip3Rebate: any, /* 销售返利  */ 
    vip4Rebate: any, /* 续租上级返利  */ 
    vip5Rebate: any, /* 续租上上级返利  */ 
}

export interface ISpecValueResponse {
    id: number, /* 规格值ID  int32*/ 
    sort: number, /* 规格值排序  int32*/ 
    specId: number, /* 规格ID  int32*/ 
    specValue: string, /* 规格值  */ 
}

export interface IGoodsSpecs {
    specId: number, /* 商品规格ID  int32*/ 
    specName: string, /* 商品规格名称  */ 
    specValueResponse: ISpecValueResponse[], /* 商品规格值信息  */ 
}

export interface IMallGoodsGetDetailResponse {
    brandId: string, /* 商品品牌  */ 
    brandName: string, /* 品牌名称  */ 
    freightId: number, /* 运费模版ID  int32*/ 
    freightName: string, /* 运费模版名称  */ 
    goodsAddress: string, /* 供应商  */ 
    goodsImageBanner: any, /* 商品轮播图  */ 
    goodsImageDetail: any, /* 商品明细图  */ 
    goodsQueryDetailProducts: IGoodsQueryDetailProducts[], /* 商品所有SKU  */ 
    goodsSn: string, /* 商品编码  */ 
    goodsSpecs: IGoodsSpecs[], /* 商品所有规格  */ 
    goodsType: number, /* 商品类型  int32*/ 
    goodsTypeName: string, /* 类型名称  */ 
    goodsWeight: number, /* 商品重量(g)  int32*/ 
    id: number, /* 商品ID  int64*/ 
    image: string, /* 商品缩略图  */ 
    marketPrice: any, /* 市场价  */ 
    name: string, /* 商品名称  */ 
    price: any, /* 销售价  */ 
    producingArea: string, /* 商品产地  */ 
    sort: number, /* 商品排序  int32*/ 
    status: number, /* 商品状态:0仓库中,1出售中,2已下架  int32*/ 
    type: string, /* 商品分类  */ 
    typeName: string, /* 分类名称  */ 
}

export interface IMallGoodsQueryResponse {
    goodsTypeName: string, /* 商品类型  */ 
    id: number, /* 商品ID  int64*/ 
    image: string, /* 商品图片  */ 
    isDeleted: number, /* 删除状态  int32*/ 
    name: string, /* 商品名称  */ 
    sort: number, /* 排序  int32*/ 
    status: number, /* 商品状态:0仓库中,1出售中,2已下架  int32*/ 
    typeName: string, /* 商品分类  */ 
}

export interface IMallGoodsQueryByFreightIdResponse {
    id: number, /* ID  int64*/ 
    image: string, /* 缩略图  */ 
    isParts: number, /* 商品类型：0普通商品，1配件商品  int32*/ 
    marketPrice: any, /* 市场价格  */ 
    name: string, /* 商品名称  */ 
    typeName: string, /* 商品分类  */ 
}

/**  
 * @description 后台-新增商品
*/
export function mallGoodsAdd(): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/goods/add`, 
	});
}

/**  
 * @description 商品选择查询
*/
export function mallGoodsChooseQuery(): IBasePage<IMallGoodsChooseQueryResponse[]> {
	return request({
		method: 'POST',
		url: `/mall/goods/choose/query`, 
	});
}

/**  
 * @description 根据运费模版统计商品总量
*/
export function mallGoodsCountByFreightId(data: IMallGoodsCountByFreightIdParams): IBase<number> {
	return request({
		method: 'GET',
		url: `/mall/goods/countByFreightId/${data.freightId}`, 
	});
}

/**  
 * @description 后台-查询商品明细
*/
export function mallGoodsGetDetail(data: IMallGoodsGetDetailParams): IBase<IMallGoodsGetDetailResponse> {
	return request({
		method: 'GET',
		url: `/mall/goods/getDetail/${data.id}`, 
	});
}

/**  
 * @description 后台-查询商品信息
*/
export function mallGoodsQuery(data: IMallGoodsQueryParams): IBasePage<IMallGoodsQueryResponse[]> {
	return request({
		method: 'POST',
		url: `/mall/goods/query/${data.page}/${data.pageSize}`, 
		data: data
	});
}

/**  
 * @description 后台-根据运费模版ID查询商品信息
*/
export function mallGoodsQueryByFreightId(data: IMallGoodsQueryByFreightIdParams): IBasePage<IMallGoodsQueryByFreightIdResponse[]> {
	return request({
		method: 'GET',
		url: `/mall/goods/queryByFreightId/${data.freightId}`, 
	});
}

/**  
 * @description 后台-修改商品
*/
export function mallGoodsUpdate(data: IMallGoodsUpdateParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/goods/update/${data.id}`, 
		data: data
	});
}

/**  
 * @description 后台-商品上下架
*/
export function mallGoodsUpdateStatus(data: IMallGoodsUpdateStatusParams): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/goods/updateStatus/${data.id}/${data.status}`, 
	});
}

/**  
 * @description 上传商品图片
*/
export function mallGoodsUploadImg(data: IMallGoodsUploadImgParams): IBase<string> {
	return request({
		method: 'POST',
		url: `/mall/goods/uploadImg`, 
		params: data
	});
}

/**  
 * @description 上传商品视频.mp4
*/
export function mallGoodsUploadVideo(data: IMallGoodsUploadVideoParams): IBase<string> {
	return request({
		method: 'POST',
		url: `/mall/goods/uploadVideo`, 
		params: data
	});
}
