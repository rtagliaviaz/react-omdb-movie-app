import {
  LOADING,
  ERROR,
  GET_FAVORITE_MOVIES,
  GET_LAST_SEARCH,
  GET_LAST_MOVIE_LIST
} from '../types/favoriteMoviesTypes'

const INITIAL_STATE = {
loader: false,
error: '',
favoriteMovies: [],
lastSearch: '',
lastMovieList: []
}

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {

    case GET_LAST_MOVIE_LIST:
      return{
        ...state,
        lastMovieList: action.payload
      }

    case GET_LAST_SEARCH:
      return{
        ...state,
        lastSearch: action.payload
      }

    case GET_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload,
        loader: false,
        error: ''
      }

    case LOADING:
      return {
        ...state,
        loader: true
      }

    case ERROR:
      return {
        ...state,
        loader: false,
        error: action.payload
      }
    
    default: return state
  }
  
}