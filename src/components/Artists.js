import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Artists extends Component
{
  render() {
    console.log(this.props);
    return (
      <div className="row">
        {this.props.artists && (this.props.artists.artists.map(artist => {
          const imgUrl = `images/covers/${artist.cover}.jpg`;
          const artistUrl = `/artist/${artist.id}`;
          return (
            <div className="col-md-3 col-sm-12" key={artist.id}>
              <Link className="home-card" to={artistUrl}>
                <div className="card">
                  <img src={imgUrl} alt={artist.name} />
                  <h5 className="card-title">{artist.name}</h5>
                </div>
              </Link>
            </div>
          );
        }))}
      </div>
    );
  }
}

export default Artists;
