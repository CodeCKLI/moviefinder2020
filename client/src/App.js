import React, {useState, useEffect} from 'react';
import './App.css';
import CardList from './components/CardList';
import NavBar from './components/NavBar';
import Info from './components/Info';
import RenderList from './components/RenderList';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Spinner} from 'react-bootstrap'


const App = () => {
  const api_key = 'e406c96bf887820e1f2fdcf50117a23a';

  const [movies, setMovies] = useState([]); 
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('date');
  const [genre, setGenre] = useState([]);
  
  useEffect( () => {
    getMovie()
    getGenre()
  },[query] )

  const getMovie = async () => {
    const response = await fetch (
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
  );
    const data = await response.json();
    setMovies(data.results)
  }

  const getGenre = async () => {
    const response = await fetch (
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`
  );
    const data = await response.json();
    setGenre(data.genres)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    if (search && search.trim() != "") {
      setQuery(search);
    } else {
      alert("Search can not be emtpy")
    }
  }

  if (movies.length === 0) {
    return (
      <div>
        <NavBar updateSearch={updateSearch} getSearch={getSearch}></NavBar>
        <Spinner animation="border" role="status" style={ {marginTop:'80px'} }>
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
      )
  }
  return (
    <Router>
      <div className="App">
        <NavBar updateSearch={updateSearch} getSearch={getSearch} />
        <Route path="/" exact render={ (props) => <RenderList {...props} genre={genre} CardList={CardList} movies={movies} /> } />
        <Route path="/info" component={Info} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
