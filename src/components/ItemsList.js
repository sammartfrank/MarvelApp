import React from 'react';
import GridItem from './GridItem.js';
import '../App.css';
import {NavLink} from 'react-router-dom';

const ItemsList = ({listadoResultados}) => (
<section className="items-section">
	<div className="items-section-body">
		<div className="row">
		{ listadoResultados.map( result => <GridItem key={result.id} img={result.thumbnail} title={result.title} date={result.date}/>) }
		</div>
	</div>
</section>
)

export default ItemsList;