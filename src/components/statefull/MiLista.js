import React from 'react';
import ItemsList from '../stateless/ItemsList.js';
import Filtros from '../stateless/Filtros.js';
import '../../App.css';

const MiLista =  ({miLista, listadoResultados}) => {

        return (
                <main role="main">
                    <div className="py-5 bg-light">
                        <div className="container">
                            <h1>My List</h1>
                            <div className="filters-bar">
                                <div className="filters-bar-left">
                                    <select name="filter-viewed" id="filter-year" className="form-control">
                                        <option value="not-viewed">Not Viewed</option>
                                        <option value="viewed">Viewed</option>
                                    </select>
                                    <Filtros />
                                    <br></br>
                                </div>
                        </div>
                        <section className="items-section">
                            <div className="items-section-body">
                                <div className="row">
                                    {!miLista.length ? (<p className="lead">no hay elementos guardados</p>): <ItemsList listadoResultados={miLista}/>}
                                </div>
                            </div>
                        </section>
                        </div>
                    </div>
                </main>
            )
}
export default MiLista;