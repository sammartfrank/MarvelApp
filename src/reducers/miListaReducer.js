import {
	ADD_ITEM,
	REMOVE_ITEM
} from '../constants/actionTypes.js'

const initialState = []

const miListaReducer = (state=initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return [
				...state, action.item
                ]
		case REMOVE_ITEM:
			return state.filter(t => t.item !== action.item)
		default:
			return state
	}
}
export default miListaReducer