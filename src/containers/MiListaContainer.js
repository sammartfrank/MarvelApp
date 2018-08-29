import { connect } from 'react-redux'
import MiLista from '../components/statefull/MiLista'
import {
  getSearchDraft,
  getCharacters,
  getComics
} from '../selectors'

const mapStateToProps = state => ({
  comics: getComics( state ),
  characters: getCharacters( state ),
  searchRes: getSearchDraft( state )
})

const mapDispatchToProps = dispatch => ({
  
} )

export default connect( mapStateToProps, mapDispatchToProps )( MiLista );
