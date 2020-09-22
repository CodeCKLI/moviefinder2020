import React from 'react';
import { Container, Row } from 'react-bootstrap';

const RenderList = ( {movies, CardList, genre} ) => {
  return (
    <Container>
      <Row>
        {
          movies.map( (movie) => {
            if (movie.poster_path != null) {
              return <CardList genreId={movie.genre_ids} genre={genre} title={movie.title} id={movie.id} poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></CardList>
            }
          } )
        } 
      </Row> 
    </Container>
  );
}

export default RenderList;