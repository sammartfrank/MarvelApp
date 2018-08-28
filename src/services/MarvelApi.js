import axios from 'axios';
import { 
	PUBLIC_KEY,
	PRIVATE_KEY
} from './keys'

class MarvelApi {
	constructor(){
		this.axios = axios.create({
			baseURL: 'http://gateway.marvel.com/',
			params: {
				//headers: {"Access-Control-Allow-Origin": "*"},
				apikey: PUBLIC_KEY,
			}
		})
	}
	// COMICS
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
		);
	//CHARACTERS
	getCharacters = (page = 1 ) => (
		this.axios.get('v1/public/characters',
			{
				params: 
					{	
						offset:(page+1) * 20,
					}
			}).then(response => response.data.data.results));

	getCharacterId = (characterId) => (
		this.axios.get(`v1/public/characters/${characterId}`).then(response =>{
			response.data.data.results
		})
		);
}

export default MarvelApi