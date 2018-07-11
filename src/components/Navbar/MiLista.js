import React, {Component} from 'react';
import ItemsList from '../ItemsList.js';
import Filtros from '../Filtros.js';
import '../../App.css';
import '../../style.css';

class MiLista extends Component {
	render(){
		return (
				<main role="main">
    				<div class="py-5 bg-light">
        				<div class="container">
				            <h1>Mi Lista</h1>
				         	<div class="filters-bar">
			                	<div class="filters-bar-left">
			                    	<select name="filter-viewed" id="filter-year" class="form-control">
			                        	<option value="not-viewed">No Vistas</option>
			                        	<option value="viewed">Vistas</option>
			                    	</select>
			                	</div>
			                <Filtros />
            			</div>
            			<section class="items-section">
                			<div class="items-section-body">
                    			<div class="row">
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