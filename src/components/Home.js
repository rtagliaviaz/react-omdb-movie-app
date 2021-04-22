import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
//actions
import * as favoriteMoviesActions from '../actions/favoriteMoviesActions'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'

import Spinner from './General/Spinner'
//api
const api = 'http://www.omdbapi.com/?'
//api key
const apiKey = 'apikey=18eaeb4f'

const Home = () => {
  //useSelector and useDispatch
  const {favoriteMovies, lastSearch, lastMovieList, loader, error} = useSelector(store => store.favoriteMoviesReducer)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  const [movie, setMovie] = useState('')
  const [searchError, setSearchError] = useState(false)

  // console.log(searchError)
  useEffect(() => {

    if (lastSearch !== '' && lastMovieList.length > 0) {
      setMovie(lastSearch)
      //if the movie is in the favorite list it will mark the movie as favorite
      lastMovieList.forEach(movie => {
        favoriteMovies.forEach(favMovie => {
          if (movie.imdbID.includes(favMovie.imdbID)) {
            movie.favorite = true
          }
        })
      })
      setList(lastMovieList)
    }
    
  }, [])

  //get response from API
  const getInfo = async () => {
    setLoading(true)
    try {
    // console.log(movie)
    const res = await axios.get(`${api}${apiKey}&s=${movie}&type=movie&page=1`)
      
        if (res) {
          const lista = []
          res.data.Search.map((li, i) => (
            lista[i] = {
              ...lista[i],
              favorite: false,
              imdbID: li.imdbID,
              Title: li.Title,
              Poster: li.Poster,
              Year: li.Year
            }
          ))

        //if the movie is in the favorite list it will mark the movie as favorite
        lista.forEach(movie => {
          favoriteMovies.forEach(favMovie => {
            if (movie.imdbID.includes(favMovie.imdbID)) {
              movie.favorite = true
            }
          })
        })
        // console.log('lista', lista)
        dispatch(favoriteMoviesActions.getLastMovieList(lista))
        setList(lista)
        setSearchError(false)
        setLoading(false)
        // console.log('list', list)
      }
  
    } catch (error) {
      // console.log(error)
        setLoading(false)
        setSearchError(true)
    }
    // .catch(err => {
      
    // })
    
  }

  //empty state
  const noMovies = () => {
    if (searchError) {
      return(
        <div>
          <div className="homeLogo">
            <img src="/assets/Logo.png" alt=""/>
          </div>
          <div className="homeMsg">
            <p className="primary">Cannot find movies with that name, please search for another</p>
            {/* <p className="secondary">Here's an offer you can't refuse</p> */}
          </div>
        </div>
      )
    }
    return(
      <div>
        <div className="homeLogo">
          <img src="/assets/Logo.png" alt=""/>
        </div>
        <div className="homeMsg">
          <p className="primary">Don't Know what to search?</p>
          <p className="secondary">Here's an offer you can't refuse</p>
        </div>
        
      </div>
    )
  }
  
  const test = (e, imdbID, Title, Year, Poster, favorite, index) => {
    e.preventDefault()
    // console.log(index)
    const updatedList = [
      ...list
    ]

    // console.log('updated', updatedList)

    updatedList[index] = {
      ...list[index],
      favorite: !favorite
    }

    setList(updatedList)

    const newFavorite = {
      Poster,
      Title,
      Year,
      favorite: true,
      imdbID
    }
    
    //if is already favorite then remove it from favorite list
    if (favorite === true) {
      dispatch(favoriteMoviesActions.removeFromFavorites(imdbID))
      // let favoriteMoviePosition = favoriteMovies.map(x => {return x.imdbID}).indexOf(imdbID)
      // // console.log(favoriteMoviePosition)
      // if(favoriteMoviePosition > -1){
      //   favoriteMovies.splice(favoriteMoviePosition, 1)
      // }
      return
    } 
    dispatch(favoriteMoviesActions.addToFavorites(newFavorite))
    // add movie to favorite movies list
    // setFavoriteMovies(favoriteMovies=>[...favoriteMovies, newFavorite])
  }

  // console.log(movie)

  const movieList = () => {
    if (loading) {
      return(
        <Spinner></Spinner>
      )
    }
    if (searchError) {
      return(
        <div>
          <div className="homeLogo">
            <img src="/assets/Logo.png" alt=""/>
          </div>
          <div className="homeMsg">
            <p className="primary">Cannot find movies with that name, please search for another</p>
            {/* <p className="secondary">Here's an offer you can't refuse</p> */}
          </div>
        </div>
      )
    }
    if (list.length > 0) {
      return(
        <div className="movies">
          
            {list.map((li, index) => (<div className="movie" key={li.imdbID}>
              
                  <div className="favorite" onClick={e => test(e, li.imdbID, li.Title, li.Year, li.Poster, li.favorite, index)}>
                    {li.favorite ? <img src="/assets/icons/icon-heart-full.png" alt="" className="icon"/> : <img src="/assets/icons/icon-heart-white.png" alt="" className="icon" />}
                  </div>
                  
                  <Link
                  className="invisibleButton"
                  to={{
                    // pathname: "/details/",
                    pathname: `/details/${li.imdbID}`,
                    state:{'movieID': li.imdbID, 'lastSearch': movie}
                  }}
                  />
          
                  
                  <p className="movieTitle" >{li.Title}</p>
                  <p className="movieYear">{li.Year}</p>
                
                <img src={li.Poster} alt="" className="moviePoster" />
              
              
            </div>))}
        <div className="empty-space"></div>
        <div className="empty-space"></div>
        <div className="empty-space"></div>

      </div>
      
      )
    }
    
  }


  return (
    <div >
      <div className="searchBar">
        <img src="" alt=""/>
        <input 
          type="text" 
          placeholder="Search movies..."
          onChange={e => setMovie(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              getInfo()
              setSearchError(false)
              dispatch(favoriteMoviesActions.getLastSearch(movie))
            }
          }}
          />
      </div>
      <div className="content">
        {list.length >0 ? movieList() : noMovies()}
      </div>
    </div>
  )
}


export default Home
