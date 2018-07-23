import axios from 'axios';
import {PUBLIC_KEY,PRIVATE_KEY} from './keys.js'

class CharactersApi {
	constructor(){
		this.axios = axios.create({
			baseURL: 'http://gateway.marvel.com/',
			params: {
				//headers: {"Access-Control-Allow-Origin": "*"},
				apikey: PUBLIC_KEY,
			}
		})
	}
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
		)

	

}
export default CharactersApi;