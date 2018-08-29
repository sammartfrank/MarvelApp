import React, { Component } from 'react';
import MyListAddButton from '../stateless/MyListAddButton.js';
import MyListRemoveButton from '../stateless/MyListRemoveButton.js';
import '../../App.css';
import MarvelApi from '../../services/MarvelApi.js';
import GridItem from '../stateless/GridItem.js'

// pasarle por props toda la data dinamica
const cardstyl = {
    minHeigth: '100vh',
    background: 'rgba(200,200,200,0.1)',
    borderRadius: '5%'
}

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
        console.log('character', character)
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
            <div style={cardstyl}>
            <h1>{item.title}{item.name}</h1>
              <GridItem style={{justifyContent:'center'}}{...this.state.item}/>
                <span style={{color:'red',fontWeigth:'bold',fontSize:'25px'}}><p>{item.description}{item.id}</p></span>
            </div>
            <div className='row'>
              <MyListAddButton  />
              <MyListRemoveButton />
            </div>
      </div>
    )
  }
}

export default Detalle
