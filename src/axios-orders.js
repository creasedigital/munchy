import axios from 'axios';

const instance = axios.create({
	baseURL:
		'http://console.firebase.google.com/project/react-munchy/database/react-munchy-default-rtdb/data/~2F',
});

instance.interceptors.response.use(
	(res) => {
		console.log(res);
		return res;
	},
	(error) => {
		console.log(error);
		return Promise.reject(error);
	},
);

export default instance;
