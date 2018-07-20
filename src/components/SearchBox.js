import React from 'react';
import '../App.css';

const SearchBox = () => (
	<div className="container">
		<form className="form-group" onSubmit={(e)=>{e.preventDefault()}}>
	     	<input className="form-control" type="text" placeholder="Buscar Comic o Personaje" aria-label="Search" />
	     	<button type="submit">Buscar</button>
	    </form>
    </div>            
	)
export default SearchBox;