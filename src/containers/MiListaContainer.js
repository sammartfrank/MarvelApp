import { connect } from 'react-redux'
import MiLista from '../components/statefull/MiLista'
import MarvelApi from '../services/MarvelApi.js'

import {
  getSearchDraft,
  getCharacters,
  getComics,
  getMiLista
} from '../selectors'

const mapStateToProps = state => ({
  comics: getComics( state ),
  characters: getCharacters( state ),
  searchRes: getSearchDraft( state ),
  miLista: getMiLista(state)
})

const mapDispatchToProps = dispatch => ({
	
} )

export default connect( mapStateToProps, mapDispatchToProps )( MiLista );
