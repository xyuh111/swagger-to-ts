/**
 * @Title mallMenu
 * @description 微信菜单
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface ISubMenus {
    hasChild: number, /* 是否有子菜单  int32*/ 
    id: number, /* 菜单ID  int32*/ 
    menuLevel: number, /* 链接等级  int32*/ 
    menuName: string, /* 菜单名称  */ 
    menuType: number, /* 菜单类型(1链接,2图文,3消息, 目前只有1)  int32*/ 
    menuUrl: string, /* 菜单URL  */ 
    parentId: number, /* 父菜单ID  int32*/ 
    sort: number, /* 排序  int32*/ 
    subMenus: ISubMenus[], /* 子菜单  */ 
}

export interface IMallMenuQueryResponse {
    hasChild: number, /* 是否有子菜单  int32*/ 
    id: number, /* 菜单ID  int32*/ 
    menuLevel: number, /* 链接等级  int32*/ 
    menuName: string, /* 菜单名称  */ 
    menuType: number, /* 菜单类型(1链接,2图文,3消息, 目前只有1)  int32*/ 
    menuUrl: string, /* 菜单URL  */ 
    parentId: number, /* 父菜单ID  int32*/ 
    sort: number, /* 排序  int32*/ 
    subMenus: ISubMenus[], /* 子菜单  */ 
}

/**  
 * @description 保存菜单
*/
export function mallMenuAdd(): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/menu/add`, 
	});
}

/**  
 * @description 发布菜单
*/
export function mallMenuDeploy(): IBase<any> {
	return request({
		method: 'POST',
		url: `/mall/menu/deploy`, 
	});
}

/**  
 * @description 查询微信菜单
*/
export function mallMenuQuery(): IBasePage<IMallMenuQueryResponse[]> {
	return request({
		method: 'GET',
		url: `/mall/menu/query`, 
	});
}
