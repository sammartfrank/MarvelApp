import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'

import comicsReducer from './comicsReducer'

import charactersReducer from './charactersReducer'

import loaderReducer from './loaderReducer'

import searchReducer from './searchReducer'

import searchDraftReducer from './searchDraftReducer'

import detalleReducer from './detalleReducer'

import miListaReducer from './miListaReducer'

const rootReducer = combineReducers({

	comics: comicsReducer,
	loader: loaderReducer,
	characters: charactersReducer,
	searchDraft: searchDraftReducer,
	searchRes: searchReducer,
	detalle: detalleReducer,
	miLista: miListaReducer,
	form: formReducer
})

export default rootReducer