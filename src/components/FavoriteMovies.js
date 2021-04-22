import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'


const FavoriteMovies = () => {

  const {favoriteMovies, lastSearch, lastMovieList, loader, error} = useSelector(store => store.favoriteMoviesReducer)
  // console.log(favoriteMovies)
  return (
    // <div>
    //   favorite movies
    //   {favoriteMovies.length > 0 ? 
    //     <div>
    //       {favoriteMovies.map(movie => (<div key={movie.imdbID}>
    //         <p>{movie.Title}</p>
    //         <img src={movie.Poster} alt=""/>
    //       </div>))}
    //     </div>
    //   : null}
    // </div>
    <>
    <h4>Favorite Movies</h4>
    <div className="movies">
          
            {favoriteMovies.map((li, index) => (<div className="movie" key={li.imdbID}>
              
                  <div className="favorite" onClick={e => test(e, li.imdbID, li.Title, li.Year, li.Poster, li.favorite, index)}>
                    {li.favorite ? <img src="/assets/icons/icon-heart-full.png" alt="" className="icon"/> : <img src="/assets/icons/icon-heart-white.png" alt="" className="icon" />}
                  </div>
                  
                  <Link
                  className="invisibleButton"
                  to={{
                    // pathname: "/details/",
                    pathname: `/details/${li.imdbID}`,
                    state:{'movieID': li.imdbID}
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
      </>
  )
}

export default FavoriteMovies
