import axios from 'axios';

const API_KEY = 'e0124ace818d578439921eee43162d20';

class MyApi {
	constructor(){
		this.axios = axios.create({
			baseURL: 'http(s)://gateway.marvel.com/',
			params: {
				api_key: API_KEY,
				languate: 'es-AR',
				}
			})
	}
	getComics = () => (
		this.axios.get('v1/public/comics')
				  .then(response =>response.data.results));
	getCharacters = () => (
		this.axios.get('v1/public/characters')
				  .then(response => response.data.results));
}
export default MyApi;