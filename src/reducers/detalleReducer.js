import {
	ADD_ITEM
} from '../constants/actionTypes.js'

const initialState = []

const detalleReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return [...state, action.value
			]
		default:
			return state
	}
}
export default detalleReducer