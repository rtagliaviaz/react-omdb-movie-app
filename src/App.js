import {Link,BrowserRouter, Route, Switch } from 'react-router-dom'
//components
import Home from './components/Home'
import Movie from './components/Movie'
// import FavoriteMovies from './components/FavoriteMovies'

const App = () => {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/details/:imdbId' component={Movie}/>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
