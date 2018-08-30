import React from 'react';

const MylistRemoveButton = () => (
	<div>
		<form>
			<button  onClick={e=> e.preventDefault()}className="btn btn-outline-danger btn-lg"type="submit">Erase</button>
		</form>	
	</div>
	)
export default MylistRemoveButton;