import axios from 'axios';

const API_KEY = '';

class MyApi {

	constructor(){
		this.axios = axios.create({
			baseURL: '',
			params: {
				api_key: API_KEY,
				languate: 'es-AR',
				headers:{'Access-COntrol-ALlow-Origin': "*"},
				},
			}
		})
	}
export default MyApi;