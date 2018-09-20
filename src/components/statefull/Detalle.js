import React, { Component } from 'react';
import MarvelApi from '../../services/MarvelApi.js';
import GridItem from '../stateless/GridItem.js'
import Background from './images/qbkls.png'
import Notif from '../stateless/Notif.js'


const styler = {
backgroundImage: `url(${Background})`,
width: '50%'
}

class Detalle extends Component {

  constructor (props) { 
    super(props)
    this.state = {
      item: null,
      loading: true,
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
          item: comic,
        })
      })
    } else {
      this.api.getCharacterById(id).then(character => {
        console.log('character', character)
        this.setState( {
          loading: false,
          item: character,
        })
      })
    }
  }

render () {
    const { item, loading } = this.state
    const { onClickAdd } = this.props
    return loading ? (
        <span>Loading...</span>
      ) : (  
      <div className="container" >
        <div className="row">
          <GridItem  {...this.state.item}/>
          <div className="card" style={styler} >
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight:'bold'}}>{item.title}</h5>
              <h5 className="card-title">{item.name}</h5>
              {item.description ? <p className="card-text" style={{color:'grey', width:'100%', textAlign:'center', justifyContent:'center', display:'flex'}}>{item.description}</p> : <p>No description available</p>}
              <hr />
              <button onClick={e => {
                e.preventDefault();
                onClickAdd(item);
                // createNotification('success')
              }} className="btn btn-success" style={{margin: '5px'}}>Add to my list
              </button>

            </div>
          
          </div>
          <br></br>
        </div>
        <a href="/" className="btn btn-primary" style={{margin:'10px'}}>Go Back</a>
      </div>
    )
  }
}
          

export default Detalle


 {/* <button onClick={e => {
                e.preventDefault();
                onClickRemove(item)
              }} className="btn btn-primary"  style={{margin: '5px'}} >Remove
              </button>*/}