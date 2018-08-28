import React from 'react';
import '../App.css';
import '../style.css';
import {NavLink} from 'react-router-dom';


const Filtros = () => (
	<div className="filters-bar-right">
		<NavLink to="" className="btn btn-light active" aria-label="Profile">
			<i className="mdi mdi-view-grid" aria-hidden="true"></i>
        </NavLink>
		<NavLink to="" className="btn btn-light" aria-label="Profile">
			<i className="mdi mdi-view-list" aria-hidden="true"></i>
        </NavLink>
    </div>
	)

export default Filtros;