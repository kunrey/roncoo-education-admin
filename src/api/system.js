import { deleteRequest, getRequest, postRequest, putRequest } from '@/utils/request'

export const systemApi = {
  getEnum: (data) => {
    return postRequest('/system/api/common/enum', data)
  },

  // 头部导航分页
  navPage: (params, pageCurrent = 1, pageSize = 20) => {
    return postRequest('/system/admin/website/nav/page', { pageCurrent, pageSize, ...params })
  },

  // 头部导航修改
  navEdit: (data) => {
    return putRequest('/system/admin/website/nav/edit', data)
  },

  // 头部导航保存
  navSave: (data) => {
    return postRequest('/system/admin/website/nav/save', data)
  },

  // 头部导航删除
  navDelete: (data) => {
    return deleteRequest('/system/admin/website/nav/delete?id=' + data.id)
  },

  // 轮播分页
  carouselPage: (params, pageCurrent = 1, pageSize = 20) => {
    return postRequest('/system/admin/website/carousel/page', { pageCurrent, pageSize, ...params })
  },

  // 轮播修改
  carouselEdit: (data) => {
    return putRequest('/system/admin/website/carousel/edit', data)
  },

  // 轮播保存
  carouselSave: (data) => {
    return postRequest('/system/admin/website/carousel/save', data)
  },

  // 轮播删除
  carouselDelete: (data) => {
    return deleteRequest('/system/admin/website/carousel/delete?id=' + data.id)
  },

  // 文章分页
  articlePage: (params, pageCurrent = 1, pageSize = 20) => {
    return postRequest('/system/admin/website/article/page', { pageCurrent, pageSize, ...params })
  },

  // 文章修改
  articleEdit: (data) => {
    return putRequest('/system/admin/website/article/edit', data)
  },

  // 文章保存
  articleSave: (data) => {
    return postRequest('/system/admin/website/article/save', data)
  },

  // 文章删除
  articleDelete: (data) => {
    return deleteRequest('/system/admin/website/article/delete?id=' + data.id)
  },

  // 友情链接分页
  linkPage: (params, pageCurrent = 1, pageSize = 20) => {
    return postRequest('/system/admin/website/link/page', { pageCurrent, pageSize, ...params })
  },

  // 友情链接修改
  linkEdit: (data) => {
    return putRequest('/system/admin/website/link/edit', data)
  },

  // 友情链接保存
  linkSave: (data) => {
    return postRequest('/system/admin/website/link/save', data)
  },

  // 友情链接删除
  linkDelete: (data) => {
    return deleteRequest('/system/admin/website/link/delete?id=' + data.id)
  },

  // 视频云初始化
  videoInit: () => {
    return getRequest('/system/admin/sys/config/video/init')
  },

  videoConfig: () => {
    return getRequest('/system/admin/sys/config/video/config')
  },

  // 系统配置--列出
  sysConfigList: (data) => {
    return postRequest('/system/admin/sys/config/list', data)
  },

  // 系统配置--编辑
  sysConfigEdit: (data) => {
    return putRequest('/system/admin/sys/config/edit', data)
  },

  // 系统菜单--列出
  sysMenuList: (data) => {
    return postRequest('/system/admin/sys/menu/list', data)
  },

  // 系统菜单--新增
  sysMenuSave: (data) => {
    return postRequest('/system/admin/sys/menu/save', data)
  },

  // 系统菜单--查看
  sysMenuView: (data) => {
    return postRequest('/system/admin/sys/menu/view', data)
  },

  // 系统菜单--删除
  sysMenuDelete: (data) => {
    return putRequest('/system/admin/sys/menu/delete', data)
  },

  // 系统菜单--编辑
  sysMenuEdit: (data) => {
    return putRequest('/system/admin/sys/menu/edit', data)
  },

  // 系统权限--新增
  sysPermissionSave: (data) => {
    return postRequest('/system/admin/sys/menu/save', data)
  },

  // 获取指定角色的权限
  sysMenuRoleList: (data) => {
    return postRequest('/system/admin/sys/menu/role/list', data)
  },

  // 分配菜单
  sysMenuRoleSave: (data) => {
    return postRequest('/system/admin/sys/menu/role/save', data)
  },

  // 系统角色--分页
  sysRolePage: (params, pageCurrent = 1, pageSize = 20) => {
    return postRequest('/system/admin/sys/role/page', { pageCurrent, pageSize, ...params })
  },

  // 系统角色--新增
  sysRoleSave: (data) => {
    return postRequest('/system/admin/sys/role/save', data)
  },

  // 系统角色--查看
  sysRoleView: (data) => {
    return postRequest('/system/admin/sys/role/view', data)
  },

  // 系统角色--删除
  sysRoleDelete: (data) => {
    return postRequest('/system/admin/sys/role/delete', data)
  },

  // 系统角色--编辑
  sysRoleEdit: (data) => {
    return putRequest('/system/admin/sys/role/edit', data)
  },

  // 系统角色--状态编辑
  sysRoleStatusId: (data) => {
    return postRequest('/system/admin/sys/role/edit', data)
  },

  // 系统角色菜单--新增
  sysRoleMenuSave: (data) => {
    return postRequest('/system/admin/sys/role/menu/save', data)
  },

  // 系统角色菜单--分页
  sysRoleMenuPage: (params, pageCurrent = 1, pageSize = 20) => {
    return postRequest('/system/admin/sys/role/menu/list', { pageCurrent, pageSize, ...params })
  },

  // 系统角色菜单--查看
  sysRoleMenuView: (data) => {
    return postRequest('/system/admin/sys/role/menu/view', data)
  },

  // 系统角色菜单--删除
  sysRoleMenuDelete: (data) => {
    return deleteRequest('/system/admin/sys/role/menu/delete/' + data.id)
  },

  // 系统角色菜单--编辑
  sysRoleMenuEdit: (data) => {
    return putRequest('/system/admin/sys/role/menu/edit', data)
  },

  // 系统用户--分配角色
  sysRoleUserSave: (data) => {
    return postRequest('/system/admin/sys/role/user/save', data)
  },

  // 系统用户--查看已分配角色
  sysRoleUserList: (data) => {
    return postRequest('/system/admin/sys/role/user/list', data)
  },

  // 系统用户--分页
  sysUserPage: (params, pageCurrent = 1, pageSize = 20) => {
    return postRequest('/system/admin/sys/user/page', { pageCurrent, pageSize, ...params })
  },

  // 系统用户--新增
  sysUserSave: (data) => {
    return postRequest('/system/admin/sys/user/save', data)
  },

  // 系统用户--查看
  sysUserView: (data) => {
    return postRequest('/system/admin/sys/user/view', data)
  },

  // 系统用户--删除
  sysUserDelete: (data) => {
    return postRequest('/system/admin/sys/user/delete', data)
  },

  // 系统用户--编辑
  sysUserEdit: (data) => {
    return putRequest('/system/admin/sys/user/edit', data)
  },

  // 系统用户状态--编辑
  sysUserStatusId: (data) => {
    return postRequest('/system/admin/sys/user/edit', data)
  },

  // 系统用户密码--编辑
  sysUserPassword: (data) => {
    return putRequest('/system/admin/sys/user/password', data)
  },

  // 系统用户角色--分页
  sysUserRolePage: (params, pageCurrent = 1, pageSize = 20) => {
    return postRequest('/system/admin/sys/user/role/list', { pageCurrent, pageSize, ...params })
  },

  // 系统用户角色--新增
  sysUserRoleSave: (data) => {
    return postRequest('/system/admin/sys/user/role/save', data)
  },

  // 系统用户角色--查看
  sysUserRoleView: (data) => {
    return postRequest('/system/admin/sys/user/role/view', data)
  },

  // 系统用户角色--删除
  sysUserRoleDelete: (data) => {
    return postRequest('/system/admin/sys/user/role/delete', data)
  },

  // 系统用户角色--编辑
  sysUserRoleEdit: (data) => {
    return putRequest('/system/admin/sys/user/role/edit', data)
  },

  // 系统日志
  sysLogPage: (data) => {
    return postRequest('/system/admin/sys/log/page', data)
  }
}
