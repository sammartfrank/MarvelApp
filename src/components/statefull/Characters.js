 import React, { Component } from 'react';
import ItemsList from '../stateless/ItemsList.js';
import Filtros from '../stateless/Filtros.js';
import '../../App.css';
import MarvelApi from '../../services/MarvelApi.js'

class Characters extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			error: '',
			loading:true,
			characters: [],
			page: 1
		}
		this.api = new MarvelApi();
	}
	componentDidMount() {
		this.api.getCharacters().then( res => {
			this.setState({
				loading: false,
				characters: [ ...this.state.characters, ...res ],
			})
		})
		this.api.getCharacterById().then( res => {
			this.setState({
				loading: false,
				characters: [...this.state.characters, ...res].map( c => ({...c, type: 'character'}))
			})
		})
	window.addEventListener( 'scroll', this.handleScroll );
	}
	handleScroll = ( event ) => {
		const { page } = this.state
	    const estaAbajo = document.body.scrollHeight === window.scrollY + window.innerHeight;
	    if( estaAbajo ) {	
	    	this.setState({
	    		loading:true
	    	})
			this.api.getCharacters( page + 1).then( res => {
				this.setState({
					loading:false, 
					characters: [ ...this.state.characters, ...res ],
					page: this.state.page + 1
				})
			})
	    }
	}
	componentWillUnmount() {
    window.removeEventListener( 'scroll', this.handleScroll )
  }
	render() {
		const { loading, characters } = this.state
		return(
			<div>
				<main role="main">
				    <div className="py-5 bg-light">
				        <div className="container">
				        <h1 style={{color:'blue', fontWeight:'bold'}}> Characters </h1>
                		<br></br>
				            <section className="items-section">
				                <div className="items-section-body">
				                    	<div className="row">
				                   			 <ItemsList listadoResultados={ characters } type="characters" />
				                    	</div>
				                   { loading && <img alt="loadng" src="https://i.imgur.com/EH9HF6h.gif" width={ 200 }/> }
				                </div>
				            </section>
				        </div>
				    </div>
				</main>
			</div>

			)
	}
}
export default Characters;