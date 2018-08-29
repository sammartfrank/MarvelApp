import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers'; 
import thunk from 'redux-thunk'
import MarvelApi from '../services/MarvelApi'

const loggerMiddleware = store => next => action => {
	console.group( action.type )
	console.log( '%c prev state', 'color:red', store.getState() )
	console.log( '%c action', 'color:orange', action )
	const returnValue = next( action )
	console.log( '%c next state', 'color:green', store.getState() )
	console.groupEnd( action.type )
	return returnValue
}
const MarvelApiInstance = new MarvelApi();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers( applyMiddleware( thunk.withExtraArgument( MarvelApiInstance ), loggerMiddleware ))
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;