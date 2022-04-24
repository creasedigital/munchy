import axios from 'axios';

const instance = axios.create({
	baseURL:
		'https://console.firebase.google.com/project/react-munchy/database/react-munchy-default-rtdb/data/~2F',
});

export default instance;
