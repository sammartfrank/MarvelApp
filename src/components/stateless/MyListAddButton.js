import React from 'react';

const MyListAddButton = ( addItemToList ) => (
	<div>
		<button className="btn btn-outline-success btn-lg" onClick={ e => {e.preventDefault(); addItemToList(e)} }type="submit">Add to my list</button>
	</div>
	)
export default MyListAddButton;