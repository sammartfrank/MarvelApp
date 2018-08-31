import { connect } from 'react-redux'
import Detalle from '../components/statefull/Detalle'
import {
  getSearchDraft,
  getCharacters,
  getComics,
  getMilistaComics,
  getMilistaChara
} from '../selectors'

import {
	addItemToList
} from '../actions'

const mapStateToProps = state => ({
  comics: getComics( state ),
  characters: getCharacters( state ),
  searchRes: getSearchDraft( state ),
  miListaDeComics: getMilistaComics( state ),
  miListaDeChara: getMilistaChara(state)
})

const mapDispatchToProps = dispatch => ({
  onClickAdd: () => {
    console.log()
    dispatch( addItemToList() )
  },
  
} )

export default connect( mapStateToProps, mapDispatchToProps )( Detalle );
