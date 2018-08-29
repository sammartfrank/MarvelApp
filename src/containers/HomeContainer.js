import { connect } from 'react-redux'
import Home from '../components/statefull/Home'
import MarvelApi from '../services/MarvelApi.js'

const mapStateToProps = state => ({
  comics: state.comics,
  characters: state.characters,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  loadHomeData: () => {
    const api = new MarvelApi();
    dispatch({
      type: 'TURN_ON_LOADER'
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

export default connect( mapStateToProps, mapDispatchToProps )( Home );
