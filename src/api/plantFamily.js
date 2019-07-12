import request from '@/utils/request'
import api from './api_menu'

export function getplantFamilyInFo(params) {
	return request({
		url: api.allplantFamily,
		method: 'get',
		params
	})
}