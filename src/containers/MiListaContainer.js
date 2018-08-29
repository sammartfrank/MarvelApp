import { connect } from 'react-redux'
import MiLista from '../components/statefull/MiLista'
import MarvelApi from '../services/MarvelApi.js'

import {
  getSearchDraft,
  getCharacters,
  getComics,
  getMilistaComics,
  getMilistaChara
} from '../selectors'

const mapStateToProps = state => ({
  comics: getComics( state ),
  characters: getCharacters( state ),
  searchRes: getSearchDraft( state ),
  miListaDeComics: getMilistaComics,
  miListaDeChara: getMilistaChara
})

const mapDispatchToProps = dispatch => ({
	loadListData: () => {
    const api = new MarvelApi();
    dispatch({
      type: 'TURN_ON_LOADER',
    })
    Promise.all([
      api.getComics(),
      api.getCharacters()
    ]).then( ( [ comics, characters ] ) => {
      dispatch( {
        type: 'GET_COMICS',
        comics
      } )
      dispatch( {
        type: 'GET_CHARACTERS',
        characters
      } )
      dispatch( {
        type: 'TURN_OFF_LOADER'
      } )
    } )
  }
  
} )

export default connect( mapStateToProps, mapDispatchToProps )( MiLista );
