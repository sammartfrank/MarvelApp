import {
	GET_SEARCH,
	DRAFT_CHANGES,
	ADD_ITEM,
	ADD_CHARA
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

export const addItemToList =  ( item )  => {
	const newItem = {
		type: ADD_ITEM,
		value: item

	}
	type: ADD_ITEM,
	newItem
}

// export const addCharaToList = (chara) =>( {
// 	type:ADD_CHARA,
// 	chara
// })