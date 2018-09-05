import {
	ADD_ITEM
} from '../constants/actionTypes.js'

const initialState = []

const detalleReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return [...state]
		default:
			return state
	}
}
export default detalleReducer