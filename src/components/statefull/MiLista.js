import React from 'react';
import ItemsList from '../stateless/ItemsList.js';
import '../../App.css';

const MiLista =  ({miLista, listadoResultados}) => {
    console.log(miLista)
        return (
                <main role="main">
                    <div className="py-5 bg-light">
                        <div className="container">
                            <h1>My List</h1>
                        </div>
                        <section className="items-section">
                            <div className="items-section-body">
                                <div className="row">
                                    {!miLista.length ? (<div className="container"><p className="lead" style={{alignText:'center', color: 'grey'}}>No saved Items</p></div>): (<div className="container">
                                                <ItemsList listadoResultados={miLista} type={miLista.type}/>
                                            </div>)}
                                </div>
                            </div>
                        </section>
                        </div>
                </main>
            )
}
export default MiLista;