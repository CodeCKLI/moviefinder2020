import React from 'react';
import { Container, Row } from 'react-bootstrap';

const RenderList = ( {movies, CardList} ) => {
  return (
    <Container>
      <Row>
        {
          movies.map( (movie) => {
            if (movie.poster_path != null) {
              return <CardList movies={movies} title={movie.title} id={movie.id} poster={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}></CardList>
            }
          } )
        } 
      </Row> 
    </Container>
  );
}

export default RenderList;