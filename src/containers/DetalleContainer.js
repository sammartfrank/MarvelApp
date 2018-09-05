import { connect } from 'react-redux'
import Detalle from '../components/statefull/Detalle'
import {
  getSearchDraft,
  getCharacters,
  getComics,
  getMiLista
} from '../selectors'

import {
	addItemToList
} from '../actions'

const mapStateToProps = state => ({
  comics: getComics( state ),
  characters: getCharacters( state ),
  searchRes: getSearchDraft( state ),
  miLista: getMiLista( state )

})

const mapDispatchToProps = dispatch => ({
  onClickAdd: ( id ) => {
    console.log()
    dispatch( addItemToList( id ) )
  },
  
} )

export default connect( mapStateToProps, mapDispatchToProps )( Detalle );
