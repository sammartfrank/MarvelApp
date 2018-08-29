import {
		DRAFT_CHANGES
} from '../constants/actionTypes.js'

const searchDraftReducer = ( state = '', action ) => {
	switch ( action.type ) {
		case DRAFT_CHANGES:
				return action.value
		default:
				return state
	}
}
export default searchDraftReducer