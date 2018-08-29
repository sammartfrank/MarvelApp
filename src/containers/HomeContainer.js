import { connect } from 'react-redux'
import Home from '../components/statefull/Home'
import MarvelApi from '../services/MarvelApi.js'
import {
  getSearchDraft,
  getCharacters,
  getComics
} from '../selectors'

import { changeDraft } from '../actions'

const mapStateToProps = state => ({
  comics: getComics( state ),
  characters: getCharacters( state ),
  loading: state.loading,
  searchRes: getSearchDraft( state )

})

const mapDispatchToProps = dispatch => ({
  loadHomeData: () => {
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
  },
  onDraftChange: ( valuesDraft ) => {
    dispatch( changeDraft( valuesDraft ))
  }
} )

export default connect( mapStateToProps, mapDispatchToProps )( Home );
