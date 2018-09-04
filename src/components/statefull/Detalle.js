import React, { Component } from 'react';
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
  onClickAdd(e, item) {
    this.setState({
      comicMList: [
      ...item, item
      ]
    })
  }

render () {
    const { item, loading } = this.state
    const { onClickAdd, onClickRemove} = this.props
    return loading ? (
        <span>Loading...</span>
      ) : (  
      <div className="container">
        <div className="row">
          <GridItem  {...this.state.item}/>
          <div className="card" style={{width: '50%'}}>
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight:'bold'}}>{item.title}</h5>
              <h5 className="card-title">{item.name}</h5>
              {item.description ? <p className="card-text" style={{color:'grey', width:'100%', textAlign:'center', justifyContent:'center', display:'flex'}}>{item.description}</p> : <p>No description available</p>}
              <button onClick={e => {
                e.preventDefault();
                onClickAdd()
              }} className="btn btn-primary">Add to my list
              </button>
              <button onClick={e => {
                e.preventDefault();
                onClickRemove()
              }} className="btn btn-primary" >Remove
              </button>
            </div>
          </div>
          <br></br>
        </div>
        <a href="/" className="btn btn-primary">Go Back</a>
      </div>
    )
  }
}
          

export default Detalle
