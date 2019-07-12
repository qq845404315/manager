import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

import Layout from '../views/layout/Layout'

export const constantRouterMap = [{
		path: '/login',
		component: _import('login/index'),
		hidden: true
	},
	{
		path: '/404',
		component: _import('404'),
		hidden: true
	},
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		name: 'Dashboard',
		hidden: true,
		children: [{
			path: 'dashboard',
			component: () => import('@/views/dashboard/index')
		}]
	},
	{
		path: '/example',
		component: Layout,
		redirect: '/example/table',
		name: 'Example',
		meta: {
			title: '系统管理',
			icon: 'example'
		},
		children: [{
				path: 'table',
				name: 'Table',
				component: () => import('@/views/table/index'),
				meta: {
					title: '表格',
					icon: 'table'
				}
			},
			{
				path: 'tree',
				name: 'Tree',
				component: () => import('@/views/tree/index'),
				meta: {
					title: 'Tree',
					icon: 'tree'
				}
			},
			{
				path: 'fullcalendar',
				name: 'Fullcalendar',
				component: () => import('@/views/fullcalendar/fullcalendar'),
				meta: {
					title: '日历',
					icon: 'tree'
				}
			}
		]
	},
	{
		path: '/essentialOil_base',
		component: Layout,
		redirect: '/essentialOil_base/essentialOilAdmin',
		name: 'essentialOil_base',
		meta: {
			title: '精油管理',
			icon: 'form'
		},
		children: [{
				path: 'essentialOilAdmin',
				name: 'EssentialOilAdmin',
				component: () => import('@/views/essentialOil_base/essentialOilAdmin'),
				meta: {
					title: '单方精油',
					icon: 'table'
				}
			},
			{
				path: 'tree',
				name: 'Tree',
				component: () => import('@/views/tree/index'),
				meta: {
					title: 'Tree',
					icon: 'tree'
				}
			},
			{
				path: 'fullcalendar',
				name: 'Fullcalendar',
				component: () => import('@/views/fullcalendar/fullcalendar'),
				meta: {
					title: '日历',
					icon: 'tree'
				}
			}
		]
	},
	{
		path: '/tab',
		name: 'tab',
		component: Layout,
		meta: {
			icon: 'example'
		},
		children: [{
			path: 'index',
			name: 'tab',
			component: () => import('@/views/tab/index'),
			meta: {
				title: 'tab选项卡',
				icon: 'form'
			}
		}]
	},
	// 表单
	{
		path: '/form',
		component: Layout,
		redirect: '/table/BaseForm',
		name: 'form',
		meta: {
			title: 'form',
			icon: 'form'
		},
		children: [{
				path: 'Form',
				name: 'Form',
				component: () => import('@/views/form/index'),
				meta: {
					title: 'Form',
					icon: 'form'
				}
			},
			{
				path: 'quillEditor',
				name: 'quillEditor',
				component: () => import('@/views/form/quillEditor'),
				meta: {
					title: 'quillEditor',
					icon: 'form'
				}
			},
			{
				path: 'tinymce',
				name: 'tinymce',
				component: () => import('@/views/form/tinymce'),
				meta: {
					title: 'tinymce',
					icon: 'form'
				}
			}
		]
	},
	{
		path: '*',
		redirect: '/404',
		hidden: true
	}
]

export default new Router({
	// mode: 'history', //后端支持可开
	scrollBehavior: () => ({
		y: 0
	}),
	routes: constantRouterMap
})

export const asyncRouterMap = [{
		path: '/icon',
		component: Layout,
		name: '图标',
		meta: {
			roles: ['admin']
		},
		children: [{
			path: 'index',
			name: '图标',
			component: () => import('@/views/svg-icon/index'),
			meta: {
				title: '图标',
				icon: 'form',
				roles: ['admin']
			}
		}]
	},
	{
		path: '*',
		redirect: '/404',
		hidden: true
	}
]
