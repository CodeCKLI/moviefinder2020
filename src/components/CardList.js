import React from 'react';
import {Card, Button} from 'react-bootstrap'

const CardList = ( { title, vote, poster } ) => {

  return (
    <div>
      <Card className="ml-4" style={{ marginTop:'5rem', width: '18rem' , height : '36rem'}}>
        <Card.Body>
          <Card.Img variant="top" src={poster} />
          <Card.Title className="mt-3">{title}</Card.Title>
          <Card.Text>
            {`IMDb score: ${vote}`}
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardList;