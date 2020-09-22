import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';

const CardList = ( {title, poster,id, genre, genreId} ) => {
  const genre_arr = [];

  for (let i = 0; i < genreId.length; i++ ){
    genre.filter( (genre) => {
      if ( genre.id === genreId[i] )
        genre_arr.push(genre['name'])
        genre_arr.push(" ")
    } )
  }

  return (
    <div>
      <Card className="ml-4" style={{ marginTop:'5rem', width: '18rem' , height : '36rem', background:'rgba(143, 143, 143, 0.2)'}}>
        <Card.Body>
          <Card.Img variant="top" src={poster} />
          <Card.Title style={{ color:'whitesmoke' }} className="mt-3">{title}</Card.Title>
          <Card.Subtitle style={{ display:'block', color:'whitesmoke' } } className="mb-3" >{genre_arr}</Card.Subtitle>
          <Button variant="info">
            <Link 
            style={{ textDecoration: 'none', color:'whitesmoke' }} 
            to={ {
              pathname: `/info/movie/${id}`, 
              state: {id} 
            } } > Learn More
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardList;