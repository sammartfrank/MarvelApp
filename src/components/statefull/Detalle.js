import React, { Component } from 'react';
import MyListAddButton from '../stateless/MyListAddButton.js';
import MyListRemoveButton from '../stateless/MyListRemoveButton.js';
import '../../App.css';
import MarvelApi from '../../services/MarvelApi.js';
import GridItem from '../stateless/GridItem.js'

// pasarle por props toda la data dinamica

class Detalle extends Component {

  constructor (props) { 
    super(props)
    this.state = {
      item: null,
      loading: true
    }
    this.api = new MarvelApi()
  }

  componentDidMount () {
    const { type, id } = this.props.match.params
    this.setState( {
      loading: true
    })
    if (type === "comic") {
      this.api.getComicById(id).then(comic => {
        console.log('comic', comic)
        this.setState( {
          loading: false,
          item: comic
        })
      })
    } else {
      this.api.getCharacterById(id).then(character => {
        this.setState( {
          loading: false,
          item: character
        })
      })
    }
  }

  render () {
    const { item, loading } = this.state
    return loading ? (
        <span>Loading...</span>
      ) : (    
      <div className="container">
       <section className="detail-section">
          <div className="row">
            <div className="jumbotron col-md-8">
              <GridItem {...this.state.item}/>
              <MyListAddButton />
              <MyListRemoveButton />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Detalle
