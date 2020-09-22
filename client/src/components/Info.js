import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Image, Button } from 'react-bootstrap';
import CastCard from './CastCard';

const api_key = 'e406c96bf887820e1f2fdcf50117a23a';

class Info extends Component {
  state = {
    activeMovie : [],
    activeCast : []
  }
  
  componentDidMount = async () => {
    const id = this.props.location.state.id;
    const req1 = await fetch ( 
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
    )
    const req2 = await fetch ( 
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`
    )
    const res1 = await req1.json();
    const res2 = await req2.json();
    this.setState( {activeMovie: res1} )
    this.setState( {activeCast: res2.cast} )
    console.log(res1)
    console.log(res2.cast)
  }

  render() {
    let {homepage} = this.state.activeMovie;
    const isNetflix = ()=>{
      if(homepage){
        return <Button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href=`${homepage}`;
          }}
    > Offical website</Button>
      } 
    }
    return (
      <Container style={{ color:"whitesmoke"}}>
        <Row>
          <Col md={7} style={{marginTop:"3rem" }}> 
            <Image style={{ width:"250px" }} src={`https://image.tmdb.org/t/p/w500${this.state.activeMovie.poster_path}`} rounded />
            <p>{this.state.activeMovie.tagline}</p>
          </Col>
          <Col md={5}>
            <ListGroup as="ul" style={{marginTop:"3rem" }}>

              <ListGroup.Item as="li" style={{background:'rgba(143, 143, 143, 0.2)' }}>{this.state.activeMovie.title}</ListGroup.Item>
              <ListGroup.Item as="li" style={{background:'rgba(143, 143, 143, 0.2)' }}>Release date: {this.state.activeMovie.release_date}</ListGroup.Item>
              <ListGroup.Item as="li" style={{background:'rgba(143, 143, 143, 0.2)' }}>Popularity: {this.state.activeMovie.popularity}</ListGroup.Item>
              <ListGroup.Item as="li" style={{background:'rgba(143, 143, 143, 0.2)' }}>Vote average: {this.state.activeMovie.vote_average}</ListGroup.Item>
              <br/>
              {isNetflix()}
            </ListGroup>  
          </Col>
        </Row> 
        <Row style={{marginTop:"3rem", height:"300px"}}>
          <Col>
            <h2>Overview: </h2>
            {this.state.activeMovie.overview}
          </Col>
        </Row>
        <Row  style={{height:"200px"}}>
          <Col>
            <h2>Cast: </h2>
            <CastCard cast={this.state.activeCast} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Info;