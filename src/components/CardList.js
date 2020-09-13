import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';

const CardList = ( {movies, title, poster,id } ) => {

  return (
    <div>
      <Card className="ml-4" style={{ marginTop:'5rem', width: '18rem' , height : '36rem'}}>
        <Card.Body>
          <Card.Img variant="top" src={poster} />
          <Card.Title className="mt-3">{title}</Card.Title>
          <Button variant="info">
            <Link 
            style={{ textDecoration: 'none', color:'whitesmoke' }} 
            to={ {
              pathname: `/info/movie/${id}`, 
              state: {id} 
            } } > Learn More</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardList;