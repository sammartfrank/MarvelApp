import {
	ADD_ITEM
} from '../constants/actionTypes.js'

const initialState = []

const miListaReducer = (state=initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return [
				...state, {
					item: action			}
			]
		default:
			return state
	}
}
export default miListaReducer