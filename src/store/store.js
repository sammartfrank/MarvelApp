import {createStore,combineReducers} from 'redux'
import comicsReducer from '../reducers/comicsReducer'; 
import charactersReducer from '../reducers/charactersReducer'; 
import loaderReducer from '../reducers/loaderReducer'; 

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

export default store;