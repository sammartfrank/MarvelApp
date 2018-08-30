import React from 'react';


const MyListAddButton = ({ onAddItemToList, item }) => (
	<div>
		<button className="btn btn-outline-success btn-lg"
			onClick={e => {e.preventDefault();onAddItemToList( item )}}
			type="submit">
				Add to my list
		</button>
	</div>
	)
export default MyListAddButton;