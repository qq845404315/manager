import request from '@/utils/request'
import api from './api_menu'
//获取列表
export function getList(params) {
	return request({
		url: api.queryAllSingleOilBaseInfPage,
		method: 'get',
		params
	})
}
//新增获取详情信息
export function getAddInfo() {
	return request({
		url: api.querySingleOilBasePublicByAddSingleOilBaseInf,
		method: 'get'
	})
}
//删除
export function delteList(params) {
	return request({
		url: api.cancelSingleOilBaseInfById,
		method: 'get',
		params
	})
}
//新增保存
export function addSumbit(data) {
	return request({
		url: api.addSingleOilBaseInf,
		method: 'post',
		data
	})
}
//编辑单方精油-根据单方精油id，得到精油详情
export function getEditInfo(params) {
	return request({
		url: api.querySingleOilBaseInfEditById,
		method: 'get',
		params
	})
}
//编辑单方精油-保存编辑后的单方精油
export function editSumbit(params) {
	return request({
		url: api.editSingleOilBaseInfById,
		method: 'post',
		params
	})
}