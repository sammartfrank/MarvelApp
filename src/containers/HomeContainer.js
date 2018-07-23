import { connect } from 'react-redux'
import Home from '../components/Home'
import ComicsApi from './services/ComicsApi.js';
import CharactersApi from './services/CharactersApi'

const mapStateToProps = state => ({
  comics: state.comics,
  characters: state.characters,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  loadHomeData: () => {
    const apiComic = new ComicsApi();
    const apiCharacter = new CharactersApi();
    dispatch({
      type: 'TURN_ON_LOADER'
    })

    Promise.all([
      apiComic.getComics(),
      apiCharacter.getCharacters()
    ]).then(([ comics, characters ]) => {
      dispatch({
        type: 'GET_COMICS',
        comics
      })
      dispatch({
        type: 'GET_CHARACTERS',
        characters
      })
      dispatch({
        type: 'TURN_OFF_LOADER'
      })
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
