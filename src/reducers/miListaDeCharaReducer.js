import {
	ADD_CHARA
} from '../constants/actionTypes.js'

const initialState = []

const miListaDeCharaReducer = ( state = initialState, action) => {
	switch (action.type) {
		case ADD_CHARA:
			return [
				...state, action.character
			]
		default:
			return state
	}
}
export default miListaDeCharaReducer