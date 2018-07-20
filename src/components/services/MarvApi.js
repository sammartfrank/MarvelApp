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
	getComics = (page = 1) => (
		this.axios.get('v1/public/comics',
			{
				params:
					{
						offset: (page-1) * 18,
					}
			}).then(response => response.data.data.results));

	getCharacters = (page = 1 ) => (
		this.axios.get('v1/public/characters',
			{
				params: 
					{
						offset: (page-1) * 18,
					}
			}).then(response => response.data.data.results));
	
}
export default MyApi;