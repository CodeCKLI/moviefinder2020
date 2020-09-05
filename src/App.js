import React, {useState, useEffect} from 'react';
import './App.css';
import { Container, Row } from 'react-bootstrap'
import CardList from './components/CardList';
import NavBar from './components/NavBar';


const App = () => {
  const api_key = 'e406c96bf887820e1f2fdcf50117a23a';

  const [movies, setMovies] = useState([]); 
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('date');
  
  useEffect( () => {
    getMovie()
  },[query] )

  const getMovie = async () => {
    const response = await fetch (
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
  );
    const data = await response.json();
    setMovies(data.results)
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
      <Container>
        <Row>
          <h1 style={{textAlign:'center', marginTop:'5rem' , width: '18rem' , height : '36rem'}}>Sorry, no result</h1>
          <NavBar updateSearch={updateSearch} getSearch={getSearch} />   
        </Row>
      </Container>  
      )
  }

  return (
    <div className="App">
    <NavBar updateSearch={updateSearch} getSearch={getSearch} />
      <Container>
        <Row>
          {
            movies.map( movie => {
                if (movie.poster_path != null) {
                return <CardList title={movie.title} vote={movie.vote_average} poster={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
              }
            } )
          } 
        </Row> 
      </Container>
    </div>
  );
}

export default App;
