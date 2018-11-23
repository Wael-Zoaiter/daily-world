import React, { Component } from 'react';

import Artists from './Artists';
import ArtistsDB from '../db.json';

class Home extends Component
{
  constructor(props) {
    super(props);

    this.state = {
      artists: ArtistsDB
    }
  }

  render() {
    return (
      <div className="container">
        <h2 className="m-3 text-center display-4">Browse Artists</h2>
        <Artists artists={this.state.artists}/>
      </div>
    );
  }
}

export default Home;
