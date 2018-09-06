import { connect } from 'react-redux'
import Detalle from '../components/statefull/Detalle'
import {
  getSearchDraft,
  getCharacters,
  getComics,
  getMiLista
} from '../selectors'

import {
	addItemToList,
  removeItemFromList
} from '../actions'

const mapStateToProps = state => ({
  comics: getComics( state ),
  characters: getCharacters( state ),
  searchRes: getSearchDraft( state ),
  miLista: getMiLista( state )

})

const mapDispatchToProps = dispatch => ({
  onClickAdd: ( item ) => {
    dispatch( addItemToList( item ) )
  },
  onClickRemove: (item ) => {
    dispatch( removeItemFromList(item) )
  }
  
} )

export default connect( mapStateToProps, mapDispatchToProps )( Detalle );
