/**
 * @Title discoveryKind
 * @description 发现-栏目设置
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface ISubKinds {
    createTime: string, /* 创建时间  date-time*/ 
    id: string, /*   */ 
    kindDesc: string, /* 栏位简介  */ 
    kindName: string, /* 栏位名称  */ 
    kindSource: number, /* 栏目来源(1test/ 2测试2)  int32*/ 
    kindStatus: number, /* 栏位状态:0无效,1有效  int32*/ 
    parentId: string, /* 父级ID  */ 
    parentName: string, /* 父级名称  */ 
    sortNum: number, /* 栏位顺序  int32*/ 
    subKinds: ISubKinds[], /* 子栏目信息  */ 
}

export interface IDiscoveryKindGetAllResponse {
    createTime: string, /* 创建时间  date-time*/ 
    id: string, /*   */ 
    kindDesc: string, /* 栏位简介  */ 
    kindName: string, /* 栏位名称  */ 
    kindSource: number, /* 栏目来源(1test/ 2测试2)  int32*/ 
    kindStatus: number, /* 栏位状态:0无效,1有效  int32*/ 
    parentId: string, /* 父级ID  */ 
    parentName: string, /* 父级名称  */ 
    sortNum: number, /* 栏位顺序  int32*/ 
    subKinds: ISubKinds[], /* 子栏目信息  */ 
}

export interface IDiscoveryKindGetDiscoveryKindResponse {
    createTime: string, /* 创建时间  date-time*/ 
    id: string, /*   */ 
    kindDesc: string, /* 栏位简介  */ 
    kindName: string, /* 栏位名称  */ 
    kindSource: number, /* 栏目来源(1test/ 2测试2)  int32*/ 
    kindStatus: number, /* 栏位状态:0无效,1有效  int32*/ 
    parentId: string, /* 父级ID  */ 
    parentName: string, /* 父级名称  */ 
    sortNum: number, /* 栏位顺序  int32*/ 
    subKinds: ISubKinds[], /* 子栏目信息  */ 
}

/**  
 * @description 根据ID删除 -- 根据主键删除
*/
export function discoveryKindDeleteDiscoveryKind(): IBase<number> {
	return request({
		method: 'GET',
		url: `/discoveryKind/deleteDiscoveryKind`, 
	});
}

/**  
 * @description 获取所有有效栏位
*/
export function discoveryKindGetAll(): IBasePage<IDiscoveryKindGetAllResponse[]> {
	return request({
		method: 'GET',
		url: `/discoveryKind/getAll`, 
	});
}

/**  
 * @description 分页查询
*/
export function discoveryKindGetDiscoveryKind(): IBasePage<IDiscoveryKindGetDiscoveryKindResponse[]> {
	return request({
		method: 'GET',
		url: `/discoveryKind/getDiscoveryKind`, 
	});
}

/**  
 * @description 新增 -- 添加
*/
export function discoveryKindSaveDiscoveryKind(): IBase<any> {
	return request({
		method: 'POST',
		url: `/discoveryKind/saveDiscoveryKind`, 
	});
}

/**  
 * @description 修改
*/
export function discoveryKindUpdateDiscoveryKind(): IBase<number> {
	return request({
		method: 'POST',
		url: `/discoveryKind/updateDiscoveryKind`, 
	});
}
