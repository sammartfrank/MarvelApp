import {
	GET_CHARACTERS
} from '../constants/actionTypes.js'

const charactersReducer = ( state= [], action ) => {
	switch ( action.type ) {
		case GET_CHARACTERS:
		return action.characters
		default:
			return state
	}
}

export default charactersReducer;
