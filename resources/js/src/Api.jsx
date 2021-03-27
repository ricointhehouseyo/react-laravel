const axios = window.axios;
const BASE_APP_URL = 'http://localhost:8000/api/';

export default {
	getHome: () => {
		return axios.get(BASE_APP_URL + 'posts');
	},
	getPosts: (page) => {
		return axios.get(BASE_APP_URL + 'posts-list?page=' + page);
	}
	,
	getPost: (id) => {
		return axios.get(BASE_APP_URL + 'posts/' + id);
	},
}