import React from 'react';
import '../App.css';

const SearchBox = () => (
	<div className="container">
		<form className="form-group" action="">
	     	<input className="form-control" type="text" placeholder="Buscar Película o Serie" aria-label="Search" />
	     	<button type="submit">Buscar</button>
	    </form>
    </div>            
	)
export default SearchBox;