import React, {Component} from 'react';
import ItemsList from './ItemsList.js';
import Filtros from './Filtros.js';
import {NavLink} from 'react-router-dom';
import '../App.css';
import MarvApi from './services/MarvApi.js';


class Comics extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
			loading: true,
			comics: [],
			characters: []
		}
		this.api = new MarvApi();
	}

	componentDidMount() {
		this.api.getComics().then(res => {
			//console.log(res)
			this.setState({
				loading:false, 
				comics: [...this.state.comics, ...res]
			})
		})
		this.api.getCharacters().then(res => {
			this.setState({
				loading:false, 
				characters: [...this.state.characters, ...res]
			})
		})
	}
	componentWillUnmount(){
	}
	render(){
		const {error,loading,comics,characters} = this.state
		{console.log('new', this.state.comics)}
		return(
				<div>
				<main role="main">
				    <div className="py-5 bg-light">
				        <div className="container">
				        <h2 style={{color:'red', fontWeight:'bold'}}>Comics </h2>
				        {/*Botones filtro*/}
				        <form className="form-inline my-2 my-md-0" action="">
				        	<select className="form-control"> 
				        		<option>Año</option>
				        	</select>
				        	<select className="form-control">
				        		<option>Ordenado por</option>
				        	</select>
				        	<select className="form-control">
				        		<option>Generos</option>
				        	</select>
				        <Filtros />
                		</form>

				            <section className="items-section">
				                <div className="items-section-body">
				                    {loading && <img src="https://i.imgur.com/EH9HF6h.gif" width={150}/>}
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
export default Comics;