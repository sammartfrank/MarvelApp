import axios from 'axios';

const API_KEY = 'e0124ace818d578439921eee43162d20';

class MyApi {
	constructor(){
		this.axios = axios.create({
			baseURL: 'http://gateway.marvel.com/',
			params: {
				//headers: {"Access-Control-Allow-Origin": "*"},
				apikey: API_KEY,
			}
		})
	}
	getComics = () => (
		this.axios.get('v1/public/comics')
				  .then(response => response.data.data.results));
				  // .then(response => console.log(response)));
	getCharacters = () => (
		this.axios.get('v1/public/characters')
				  .then(response => response.data.data.results));
}
export default MyApi;