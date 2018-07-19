import React from 'react';
import GridItem from './GridItem.js';
import '../App.css';
import {NavLink} from 'react-router-dom';

const ItemsList = ({listadoResultados}) => (
<section className="items-section">
	<h5 className="items-section-title">Mi Lista <NavLink to="/milista">Ver todas</NavLink></h5>
	<div className="items-section-body">
		<div className="row">
		{ listadoResultados.map( result => <GridItem img={result.thumbnail} title={result.title} date={result.date}/>) }
		</div>
	</div>
</section>
)

export default ItemsList;