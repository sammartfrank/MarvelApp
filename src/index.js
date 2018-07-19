import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'


const comicsReducer = (state=[], action) => {
	switch (action.type) {
		case 'GET_COMICS':
		return action.comics
		default:
			return state
	}
}
const charactersReducer = (state=[], action) => {
	switch (action.type) {
		case 'GET_CHARACTERS':
		return action.characters
		default:
			return state
	}
}
const  loaderReducer = (state= false, action) => {
	switch (action.type) {
		case 'TURN_ON_LOADER':
			return true
		case 'TURN_OFF_LOADER':
			return false
		default:
			return state
	}
}

const rootReducer = combineReducers({
	comics: comicsReducer,
	characters: charactersReducer,
	loading: loaderReducer
})

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)

let state = store.getState();

console.log('The State', state);


ReactDOM.render(
<Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
