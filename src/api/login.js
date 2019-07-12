import request from '@/utils/request'
import api from './api_menu'

export function login(username, password) {
	var params = new URLSearchParams();
	params.append('username', username);
	params.append('password', password);
	return request({
		url: api.loginmanager,
		method: 'post',
		data: params,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
}

export function getInfo(token) {
	return request({
		url: api.detailmanager,
		method: 'get'
	})
}

export function logout() {
	return request({
		url: api.logoutmanager,
		method: 'get'
	})
}
