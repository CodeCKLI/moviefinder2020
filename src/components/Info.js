import React, { Component } from 'react';

const api_key = 'e406c96bf887820e1f2fdcf50117a23a';
class Info extends Component {


  state = {
    activeMovie : []
  }
  componentDidMount = async () => {
    const id = this.props.location.state.id;
    const req = await fetch ( 
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
    )
    const res = await req.json();
    this.setState( {activeMovie: res} )
  }

  render() {
    return (
      <div>
        <h1>{this.state.activeMovie.overview}</h1>
      </div>
    );
  }
}

export default Info;