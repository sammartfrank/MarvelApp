import React, {Component} from 'react';
import ItemsList from '../ItemsList.js';
import {NavLink} from 'react-router-dom';
import Comics from './Comics.js';

const {comics} = this.state

class Home extends Component {

	render(){
		return (  
			<div>
				<main role="main">
				    <div className="py-5 bg-light">
				        <div className="container">
				            <section className="items-section">
				                <div className="items-section-body">
				                    <div className="row">
				                   		 <ItemsList listadoResultados={comics} />
				                    </div>
				                </div>
				            </section>
				            <section className="items-section">
				                <h5 className="items-section-title">Películas más Populares <NavLink to="/peliculas">Ver todas</NavLink></h5>
				                <div className="items-section-body">
				                    <div className="row">
				                   		 <ItemsList listadoResultados={comics} />
				                    </div>
				                </div>
				            </section>
				            <section className="items-section">
				                <h5 className="items-section-title">Series más Populares <NavLink to="/series">Ver todas</NavLink></h5>
				                <div className="items-section-body">
				                    <div className="row">
				                        <ItemsList listadoResultados={comics} />
				                    </div>
				                </div>
				            </section>
				        </div>
				    </div>
				</main>
			</div>
)
}
}
export default Home;