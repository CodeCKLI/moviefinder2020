import React from 'react';
import { CardDeck, } from 'react-bootstrap';
import CastComponents from './CastComponents'

const CastCard = ({cast}) => {
  console.log(cast)
  return (
    
    <CardDeck>
    {
        
      cast.map( (cast) => {
        if (cast.profile_path != null){
          return <CastComponents name={cast.name} photo={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} character={cast.character}></CastComponents>
        }
      })
    }
    </CardDeck>

  );
}

export default CastCard;