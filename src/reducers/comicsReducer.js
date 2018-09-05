import {
	GET_COMICS
} from '../constants/actionTypes.js'
const comicsReducer = ( state = [], action ) => {
	switch ( action.type ) {
		case GET_COMICS:
			return action.comics
		default:
			return state
	}
}

export default comicsReducer;