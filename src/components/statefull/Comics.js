import React, { Component } from 'react';
import ItemsList from '../stateless/ItemsList.js';
import Filtros from '../stateless/Filtros.js';
import '../../App.css';
import MarvelApi from '../../services/MarvelApi.js';


class Comics extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			error: '',
			loading: true,
			comics: [],
			// characters: [],
			page:0
		}
		this.api = new MarvelApi();
	}

	componentDidMount() {
		this.api.getComics().then( res => {
			//console.log(res)
			this.setState({
				loading:false, 
				comics: [ ...this.state.comics, ...res ]
			})
		})
		// this.api.getCharacters().then(res => {
		// 	this.setState({
		// 		loading:false, 
		// 		characters: [...this.state.characters, ...res]
		// 	})
		// })
		window.addEventListener( 'scroll', this.handleScroll )
	}
	handleScroll = ( event ) => {
		const { page } = this.state
	    const estaAbajo = document.body.scrollHeight === window.scrollY + window.innerHeight;
	    if( estaAbajo ) {	
	    	console.log( page )
	    	this.setState( {
	    		loading:true,
	    		page:this.state.page+1
	    	} )
			this.api.getComics( page ).then( res => {
				this.setState( {
					loading:false, 
					comics: [ ...this.state.comics, ...res ],
					page: page
				})
			})
	    }
  	}
	componentWillUnmount() {
		window.removeEventListener( 'scroll', this.handleScroll )
	}
	render(){
		const { error, loading, comics, characters } = this.state
		{ console.log( 'new', this.state.comics ) }
		return(
				<div>
				<main role="main">
				    <div className="py-5 bg-light">
				        <div className="container">
				        <h1 style={{ color:'red', fontWeight:'bold' }}>Comics </h1>
				        {/*Botones filtro*/}
				        <form className="form-inline my-2 my-md-0" >
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
				                    	<div className="row">
				                   		 	<ItemsList listadoResultados={ comics } />
				                    	</div>
						{ loading && <img src="https://i.imgur.com/EH9HF6h.gif" width={190}/> }
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