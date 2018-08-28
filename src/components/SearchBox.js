import React from 'react';
import '../App.css';

//plantearlo en REDUX FORM

const SearchBox = () => (
	<div className="container">
		<form className="form-group" onSubmit={(e)=>{e.preventDefault()}}>
	     	<input className="form-control" type="text" placeholder="Comic or Character" aria-label="Search" />
	     	<button type="submit">Search</button>
	    </form>
    </div>            
	)
export default SearchBox;