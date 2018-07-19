import React, {Component} from 'react';
import ItemsList from './ItemsList.js';
import Filtros from './Filtros.js';
import '../App.css';
import '../style.css';

class MiLista extends Component {
	render(){
		return (
				<main role="main">
    				<div className="py-5 bg-light">
        				<div className="container">
				            <h1>Mi Lista</h1>
				         	<div className="filters-bar">
			                	<div className="filters-bar-left">
			                    	<select name="filter-viewed" id="filter-year" className="form-control">
			                        	<option value="not-viewed">No Vistas</option>
			                        	<option value="viewed">Vistas</option>
			                    	</select>
			                	</div>
			                <Filtros />
            			</div>
            			<section className="items-section">
                			<div className="items-section-body">
                    			<div className="row">
                    				<ItemsList />
                    			</div>
                			</div>
            			</section>
        				</div>
    				</div>
				</main>
			)
	}
}
export default MiLista;