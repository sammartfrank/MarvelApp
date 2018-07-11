import React, {Component} from 'react';
import MyListAddButton from './MyListAddButton.js';
import MyListRemoveButton from './MyListRemoveButton.js';
import '../App.css';


// pasarle por props toda la data dinamica

class Detalle extends Component {
	render (){
		return (	
			<div className="container">
           	 <section className="detail-section">
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie" className="img-fluid" />
                    </div>
                    <div className="jumbotron col-md-8">
                        <h1>Thor: Ragnarok <span>(2017)</span></h1>
                        <div>
                            <h3>Sinopsis</h3>
                            <p>Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.</p>
                        </div>
                        <div>
                            <h3>Equipo</h3>
                            <div className="row">
                                <div className="col-md-4">
                                    <h5>Taika Waititi</h5>
                                    <p>Director</p>
                                </div>
                                <div className="col-md-4">
                                    <h5>Franco Sammartino</h5>
                                    <p>Productor</p>
                                </div>
                                <div className="col-md-4">
                                    <h5>Camila Quilez</h5>
                                    <p>Guionista</p>
                                </div>
                                <div className="col-md-4">
                                    <h5>Diego  A. Maradona</h5>
                                    <p>Substance Expert</p>
                                </div>
                            </div>
                        </div>
                        <div>
                        <MyListAddButton />
						<MyListRemoveButton />
                        </div>
                    </div>
                </div>
             </section>
            </div>
			)
	}
}
export default Detalle;