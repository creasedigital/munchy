import axios from 'axios';

const instance = axios.create({
	baseURL:
		'https://console.firebase.google.com/project/react-munchy/database/react-munchy-default-rtdb/data/~2F',
	headers: { post: { 'Access-Control-Allow-Origin': '*' } },
});

// instance.interceptors.response.use(
// 	(res) => {
// 		console.log(res);
// 		return res;
// 	},
// 	(error) => {
// 		console.log(error);
// 		return Promise.reject(error);
// 	},

export default instance;
