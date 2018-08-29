import { combineReducers } from 'redux'

import { reducer as fromReducer } from 'redux-form'

import comicsReducer from './comicsReducer'

import charactersReducer from './charactersReducer'

import loaderReducer from './loaderReducer'

const rootReducer = combineReducers({

	comics: comicsReducer,
	loader: loaderReducer,
	characters: charactersReducer
})

export default rootReducer