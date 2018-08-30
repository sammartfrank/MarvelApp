import React, { Component } from 'react';
import MyListAddButton from '../stateless/MyListAddButton.js';
import MyListRemoveButton from '../stateless/MyListRemoveButton.js';
import '../../App.css';
import MarvelApi from '../../services/MarvelApi.js';
import GridItem from '../stateless/GridItem.js'

// pasarle por props toda la data dinamica
const cardstyl = {
    minHeigth: '50vh',
    background: 'rgba(200,200,200,0.1)',
    borderRadius: '5%'
}

class Detalle extends Component {

  constructor (props) { 
    super(props)
    // this.handleClick = this.handleClick.bind(this)
    this.state = {
      item: null,
      loading: true,
      comicMList: null,
      characterMList: null
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
    addItemToList = (item ) => {
      const { type, id } = this.props.match.params
      if (type === "comic") {
        this.setState({
          coimcMList: item
        })
      }
      else {
        this.setState({
          characterMList: item
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
            <div className="row">
              <GridItem style={{justifyContent:'center'}} {...this.state.item}/>
              <div className="col-md">
              <h5>Description</h5>
                <span style={{color:'blue',fontSize:'25px'}}><p>{item.description}{item.id}</p></span>
              </div>
              </div>
            <div className='row'>
              <MyListAddButton addItemToList={this.addItemToList} />
              <MyListRemoveButton removeItemFromList={this.removeItem} />
            </div>
            <br></br>
      </div>
    </div>
    )
  }
}

export default Detalle
