import axios from 'axios';
import {PUBLIC_KEY,PRIVATE_KEY} from './keys.js'

class ComicsApi {
	constructor(){
		this.axios = axios.create({
			baseURL: 'http://gateway.marvel.com/',
			params: {
				//headers: {"Access-Control-Allow-Origin": "*"},
				apikey: PUBLIC_KEY,
			}
		})
	}
	getComics = (page = 1) => (
		this.axios.get('v1/public/comics',
			{
				params:
					{
						offset:(page-1) * 20,
					}
			}).then(response => response.data.data.results));
	
	getComicId = (comicId) => (
		this.axios.get(`v1/public/comics/${comicId}`).then(response =>{
					response.data.data.results
					})
		);

	getComicCharacters = (comicId) => (
		this.axios.get(`/vi/public/comics/${comicId}`).then(response=>{
			response.data.data.results
		})
		);
	getComicCreators = (comicId) => (
		this.axios.get(`v1/public/comics/${comicId}/creators`).then(response=>{
			response.data.data.results
		})
		)
	
	
}
export default ComicsApi;