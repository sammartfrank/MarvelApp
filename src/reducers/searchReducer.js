import {
	GET_SEARCH	
} from '../constants/actionTypes.js'
const searchReducer = ( state = [], action ) => {
		switch ( action.type ) {
			case GET_SEARCH:
					return action.searchOutput
			default:
					return state
		}
}

export default searchReducer	