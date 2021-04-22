import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './Movie.css'
import axios from 'axios'

//general
import Spinner from './General/Spinner'
//actions
import * as favoriteMoviesActions from '../actions/favoriteMoviesActions'
import {useSelector, useDispatch} from 'react-redux'
//api
const api = 'http://www.omdbapi.com/?'
//api key
const apiKey = 'apikey=18eaeb4f'

const Movie = (props) => {
  let history = useHistory();
  //useSelector and useDispatch
  const {favoriteMovies, loader, error} = useSelector(store => store.favoriteMoviesReducer)
  const dispatch = useDispatch()

  // console.log((props.match.url).slice(9, 18)) // movie id

  const [details, setDetails] = useState()
  const [added, setAdded] = useState(false)
  //get movie details
  useEffect(() => {
    if (props.location.state !== undefined) {
      axios.get(api+apiKey+`&i=${props.location.state.movieID}`)
      .then(res => {
        if (res) {
          setDetails(res.data)
        } 
      })
    } else {
      axios.get(api+apiKey+`&i=${(props.match.url).slice(9, 18)}`)
      .then(res => {
        if (res) {
          setDetails(res.data)
        } else {
          // console.log('error')
        }
      })
    }
  }, [])

useEffect(() => {
  if (details && favoriteMovies.map(x => {return x.imdbID}).includes(details.imdbID)) {
    setAdded(true)
  }
}, [details])
  
  const removeFromFavorites = (e, movieId) => {
    e.preventDefault()
    if (added) {
      setAdded(!added)
      dispatch(favoriteMoviesActions.removeFromFavorites(movieId))
      return
    }
  }
  // console.log(details)
  const addtoFavorites = (e, Poster, Title, Year, imdbID) => {
    const movie = {
      Poster,
      Title,
      Year,
      favorite: true,
      imdbID
    }
    dispatch(favoriteMoviesActions.addToFavorites(movie))
    // console.log('added')
    setAdded(!added)
  }

  // const goBack = (e) => {
  //   e.preventDefault()
  //   history.push({pathname:'/', state:{'movie':searched}})
  // }
  // const cast = details.Actors.split(", ")
  // console.log('cast', cast.map(actor => (actor)))
  return (
    
    <div>
      {details === undefined ? <Spinner /> : <div>
        <div
          className="btn__return"
          onClick={() => history.goBack()}
          // to={{
          //   pathname: "/",
          // }}
          >
          <img src="assets/icons/icon-arrow-grey.png" alt="" />
        </div>
      <div className="movie-info">
        <div className="info">
          <div className="info__title-year-rate">
            <p>{details.Runtime} · {details.Year} · <b className="info__title-year-rate__rate">{details.Rated}</b></p>
          </div>
          <div className="info__title-year-rate__title">
            <p>{details.Title}</p>
          </div>
          
          <div className="labels">
            <div className="labels__imdb">
              <div className="logo">
              <img src="assets/logos/logo-imdb.png" alt=""/>
              </div>
              <div className="rating">
                <p>{details.Ratings[0].Value}</p>
              </div>
            </div>
            {details.Ratings.length > 1 ? 
            <div className="labels__rottenTomatoes">
             
                <div className="logo">
                  <img src="assets/logos/logo-rotten-tomatoes.png" alt=""/>
                </div>
              
              <div className="rating">
                <p>{details.Ratings[1].Value}</p>
              </div> 
              
            </div>
            : null}
            
              {!added ? 
              <div className="labels__favorite" onClick={e =>addtoFavorites(e, details.Poster, details.Title, details.Year, details.imdbID)}>
                <div className="icon">
                <img src="assets/icons/icon-heart-grey.png" alt=""/>
                </div>
                <div className="text">
                <p>Add to favourites</p>
                </div>
              </div> :
              <div className="labels__favorite favAdded" onClick={e =>removeFromFavorites(e, details.imdbID)}>
              <div className="icon">
              <img src="assets/icons/icon-heart-full.png" alt=""/>
              </div>
              <div className="text added">
              <p>Added</p>
              </div>
              </div> }
            
          </div>
          
          <div className="plot-segment">
            <p className="segment-title">Plot</p>
            <p className="segment-info">{details.Plot}</p>
          </div>
          <div className="cast-genre-director">
            <div className="cast-segment">
              <p className="segment-title">Cast</p>
              {/* <p >{details.Actors.split(", ")}</p> */}
              {details.Actors.split(", ").map(actor => (
                <p className="segment-info" key={actor}>{actor}</p>
              ))}
            </div>
            <div className="genre-segment">
              <p className="segment-title">Genre</p>
              {details.Genre.split(", ").map(genre => (
               <p className="segment-info" key={genre}>{genre}</p>
              ))}
            </div>
            <div className="director-segment">
              <p className="segment-title">Director</p>
              {/* <p className="segmentInfo">{details.Director}</p> */}
              {details.Director.split(", ").map(director => (
               <p className="segment-info" key={director}>{director}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="poster">
          <img src={details.Poster} alt=""/>
        </div>
      </div>
        </div>}
      
    </div>
  )
}
export default Movie
