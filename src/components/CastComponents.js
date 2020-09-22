import React from 'react';
import {Card} from 'react-bootstrap';

const CastComponents = ({character, photo, name}) =>  {
  return (
    <div>
      <Card style={{background:'rgba(143, 143, 143, 0.2)', width:"300px"}}>
        <Card.Body>
        <Card.Img variant="top" src={photo} />
        <Card.Title>
        {character} 
        </Card.Title>
        <Card.Subtitle>
        {name}
        </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CastComponents;