import {
	GET_SEARCH,
	DRAFT_CHANGES,
	ADD_ITEM,
	REMOVE_ITEM
}
from '../constants/actionTypes.js'

//GET THE SEARCH 

export const search = ( values ) => ( dispatch, getState, api ) =>  
			api.search( values )
			   .then( res => {
			   	dispatch({ type:GET_SEARCH, SearchOutput:res.data })
			   })

export const changeDraft = ( valuesDraft ) => ({
	type: DRAFT_CHANGES,
	value: valuesDraft
})

export const addItemToList =  ( item )  =>( {
	type: ADD_ITEM,
	item
})

export const removeItemFromList =  ( item )  =>( {
	type: REMOVE_ITEM,
	item
})