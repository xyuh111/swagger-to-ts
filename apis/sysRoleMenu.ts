/**
 * @Title sysRoleMenu
 * @description 角色菜单操作权限信息
 * @author xieyuhui
 * @date Wed Nov 24 2021 15:10:54 GMT+0800 (中国标准时间)
*/

import request from "axios"
import { IBase, IBasePage } from "."
	
/**  
 * @description 新增角色权限菜单
*/
export function sysRoleMenuAddSysRoleMenu(): IBase<number> {
	return request({
		method: 'POST',
		url: `/sysRoleMenu/addSysRoleMenu`, 
	});
}
