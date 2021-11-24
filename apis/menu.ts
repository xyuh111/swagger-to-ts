/**
 * @Title menu
 * @description 菜单
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	/*
 * 响应接口
*/
export interface IMenuGetActionByMenuResponse {
    code: string, /*   */ 
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    icon: string, /*   */ 
    id: number, /*   int32*/ 
    isMenu: number, /*   int32*/ 
    isOpen: number, /*   int32*/ 
    levels: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
    name: string, /*   */ 
    num: number, /*   int32*/ 
    pcode: string, /*   */ 
    status: number, /*   int32*/ 
    url: string, /*   */ 
}

export interface IMenuGetActionsByUserResponse {
    code: string, /*   */ 
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    icon: string, /*   */ 
    id: number, /*   int32*/ 
    isMenu: number, /*   int32*/ 
    isOpen: number, /*   int32*/ 
    levels: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
    name: string, /*   */ 
    num: number, /*   int32*/ 
    pcode: string, /*   */ 
    status: number, /*   int32*/ 
    url: string, /*   */ 
}

export interface IActions {
    actions: IActions[], /*   */ 
    code: string, /*   */ 
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    icon: string, /*   */ 
    id: number, /*   int32*/ 
    isMenu: number, /*   int32*/ 
    isOpen: number, /*   int32*/ 
    levels: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
    name: string, /*   */ 
    num: number, /*   int32*/ 
    pcode: string, /*   */ 
    selected: number, /*   int32*/ 
    status: number, /*   int32*/ 
    url: string, /*   */ 
}

export interface IMenuGetAllMenuResponse {
    actions: IActions[], /*   */ 
    code: string, /*   */ 
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    icon: string, /*   */ 
    id: number, /*   int32*/ 
    isMenu: number, /*   int32*/ 
    isOpen: number, /*   int32*/ 
    levels: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
    name: string, /*   */ 
    num: number, /*   int32*/ 
    pcode: string, /*   */ 
    selected: number, /*   int32*/ 
    status: number, /*   int32*/ 
    url: string, /*   */ 
}

export interface IMenuGetMenuByIdResponse {
    code: string, /*   */ 
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    icon: string, /*   */ 
    id: number, /*   int32*/ 
    isMenu: number, /*   int32*/ 
    isOpen: number, /*   int32*/ 
    levels: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
    name: string, /*   */ 
    num: number, /*   int32*/ 
    pcode: string, /*   */ 
    status: number, /*   int32*/ 
    url: string, /*   */ 
}

export interface IMenuGetMenusByRoleResponse {
    actions: IActions[], /*   */ 
    code: string, /*   */ 
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    icon: string, /*   */ 
    id: number, /*   int32*/ 
    isMenu: number, /*   int32*/ 
    isOpen: number, /*   int32*/ 
    levels: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
    name: string, /*   */ 
    num: number, /*   int32*/ 
    pcode: string, /*   */ 
    selected: number, /*   int32*/ 
    status: number, /*   int32*/ 
    url: string, /*   */ 
}

export interface IMenuGetMenusByUserResponse {
    actions: IActions[], /*   */ 
    code: string, /*   */ 
    createTime: string, /*   date-time*/ 
    createUser: string, /*   */ 
    icon: string, /*   */ 
    id: number, /*   int32*/ 
    isMenu: number, /*   int32*/ 
    isOpen: number, /*   int32*/ 
    levels: number, /*   int32*/ 
    modifyTime: string, /*   date-time*/ 
    modifyUser: string, /*   */ 
    name: string, /*   */ 
    num: number, /*   int32*/ 
    pcode: string, /*   */ 
    selected: number, /*   int32*/ 
    status: number, /*   int32*/ 
    url: string, /*   */ 
}

/**  
 * @description 新增按钮 -- 添加按钮
*/
export function menuAddAction(): IBase<number> {
	return request({
		method: 'POST',
		url: `/menu/addAction`, 
	});
}

/**  
 * @description 新增或修改菜单 -- 添加菜单
*/
export function menuAddMenu(): IBase<number> {
	return request({
		method: 'POST',
		url: `/menu/addMenu`, 
	});
}

/**  
 * @description 根据ID删除菜单 -- 根据主键删除菜单信息
*/
export function menuDeleteMenu(): IBase<number> {
	return request({
		method: 'GET',
		url: `/menu/deleteMenu`, 
	});
}

/**  
 * @description 根据菜单Code获取菜单下按钮 -- 根据菜单code获取菜单下按钮
*/
export function menuGetActionByMenu(): IBasePage<IMenuGetActionByMenuResponse[]> {
	return request({
		method: 'GET',
		url: `/menu/getActionByMenu`, 
	});
}

/**  
 * @description 查询当前用户菜单下的按钮
*/
export function menuGetActionsByUser(): IBasePage<IMenuGetActionsByUserResponse[]> {
	return request({
		method: 'GET',
		url: `/menu/getActionsByUser`, 
	});
}

/**  
 * @description 查询所有菜单信息
*/
export function menuGetAllMenu(): IBasePage<IMenuGetAllMenuResponse[]> {
	return request({
		method: 'GET',
		url: `/menu/getAllMenu`, 
	});
}

/**  
 * @description 根据主键查询菜单信息 -- 根据MenuId查询菜单信息
*/
export function menuGetMenuById(): IBase<IMenuGetMenuByIdResponse> {
	return request({
		method: 'POST',
		url: `/menu/getMenuById`, 
	});
}

/**  
 * @description 根据角色获取菜单信息
*/
export function menuGetMenusByRole(): IBasePage<IMenuGetMenusByRoleResponse[]> {
	return request({
		method: 'GET',
		url: `/menu/getMenusByRole`, 
	});
}

/**  
 * @description 查询当前用户所有菜单
*/
export function menuGetMenusByUser(): IBasePage<IMenuGetMenusByUserResponse[]> {
	return request({
		method: 'GET',
		url: `/menu/getMenusByUser`, 
	});
}

/**  
 * @description 修改按钮信息
*/
export function menuUpdateAction(): IBase<number> {
	return request({
		method: 'POST',
		url: `/menu/updateAction`, 
	});
}

/**  
 * @description 修改菜单信息
*/
export function menuUpdateMenu(): IBase<number> {
	return request({
		method: 'POST',
		url: `/menu/updateMenu`, 
	});
}
