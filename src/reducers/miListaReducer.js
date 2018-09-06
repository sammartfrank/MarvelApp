import {
	ADD_ITEM,
	REMOVE_ITEM
} from '../constants/actionTypes.js'

const initialState = []

const miListaReducer = (state=initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return [
				...state, 
					{
                        id: action.item.id
                    }
			]
		case REMOVE_ITEM:
			return state.filter(t => t.id !==action.id)
		default:
			return state
	}
}
export default miListaReducer