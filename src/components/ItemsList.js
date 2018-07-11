import React from 'react';
import GridItem from './GridItem.js';
import '../App.css';
import {NavLink} from 'react-router-dom';


const ItemsList = () => (
<section className="items-section">
	<h5 className="items-section-title">Mi Lista <NavLink to="/milista">Ver todas</NavLink></h5>
	<div className="items-section-body">
		<div className="row">
			<GridItem />
			<GridItem />
			<GridItem />
			<GridItem />
			<GridItem />
			<GridItem />
			<GridItem />
		</div>
	</div>
</section>
)

export default ItemsList;