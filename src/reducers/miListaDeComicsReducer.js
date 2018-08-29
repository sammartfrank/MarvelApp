import {
	ADD_COMIC
} from '../constants/actionTypes.js'

const initialState = []

const miListaDeComicsReducer = (state=initialState, action) => {
	switch (action.type) {
		case ADD_COMIC:
			return [
				...state, action.comic
			]
		default:
			return state
	}
}
export default miListaDeComicsReducer