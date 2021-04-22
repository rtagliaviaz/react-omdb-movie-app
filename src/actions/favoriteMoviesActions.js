import { 
  ERROR, 
  LOADING, 
  GET_FAVORITE_MOVIES,
  GET_LAST_SEARCH,
  GET_LAST_MOVIE_LIST
} from '../types/favoriteMoviesTypes'

export const addToFavorites = (movie) => (dispatch, getState) => {
  const {favoriteMovies} = getState().favoriteMoviesReducer;

  const newMovie = favoriteMovies
  
  newMovie.push(movie)
  // console.log(favoriteMovies)
  dispatch({
    type: GET_FAVORITE_MOVIES,
    payload: newMovie
  })
}

export const removeFromFavorites = (movieId) => (dispatch, getState) => {
  const {favoriteMovies, lastMovieList} = getState().favoriteMoviesReducer;

  
  const newMovieList = favoriteMovies;
  const remove = lastMovieList

  let favoriteMoviePosition = newMovieList.map(x => {return x.imdbID}).indexOf(movieId)
    if(favoriteMoviePosition > -1){
      newMovieList.splice(favoriteMoviePosition, 1)
    }

   
  let moviePosition = remove.map(x => {return x.imdbID}).indexOf(movieId)
    if(moviePosition > -1){
      remove[moviePosition].favorite = false
    }
    // console.log(remove)

  
  
      
  dispatch({
    type: GET_FAVORITE_MOVIES,
    payload: newMovieList
  })
} 

//add to another reducers

//save last search
export const getLastSearch = (movie) => (dispatch) => {
  dispatch({
    type: GET_LAST_SEARCH,
    payload: movie
  })
}

export const getLastMovieList = (list) => (dispatch) => {

  dispatch({
    type: GET_LAST_MOVIE_LIST,
    payload: list
  })
}