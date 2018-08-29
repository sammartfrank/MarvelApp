import React from 'react';
import GridItem from './GridItem.js';
import '../../App.css';

const ItemsList = ({ listadoResultados, type }) =>
  <div className="container">
    <section className="items-section">
      <div className="items-section-body">
        <div className="row">
          {listadoResultados.map(result => 
            <GridItem 
              key={result.id}
              id={result.id}
              type={type}
              thumbnail={result.thumbnail}
              title={result.title}
              date={result.date}
              desc={result.description}
            />
          )}
        </div>
      </div>
    </section>
  </div>

export default ItemsList
