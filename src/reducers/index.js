import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'

import comicsReducer from './comicsReducer'

import charactersReducer from './charactersReducer'

import loaderReducer from './loaderReducer'

import searchReducer from './searchReducer'

import searchDraftReducer from './searchDraftReducer'

import miListaDeComicsReducer from './miListaDeComicsReducer'

import miListaDeCharaReducer from './miListaDeCharaReducer'

const rootReducer = combineReducers({

	comics: comicsReducer,
	loader: loaderReducer,
	characters: charactersReducer,
	searchDraft: searchDraftReducer,
	searchRes: searchReducer,
	miListaDeComics: miListaDeComicsReducer,
	miListaDeChara: miListaDeCharaReducer,
	form: formReducer
})

export default rootReducer