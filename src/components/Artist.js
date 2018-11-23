import React, { Component } from 'react';
import ArtistsDB from '../db.json';

class Artist extends Component
{
  render() {
    let artist = ArtistsDB.artists.filter(item => {
      return item.id.toString() === this.props.match.params.id;
    });
    artist = artist[0];
    const imgUrl = `/images/covers/${artist.cover}.jpg`;
    return (
      <div className="container w-50">
        <div className="detail">
          <h2 className="title">{artist.name}</h2>
          <img src={imgUrl} alt={artist.name} />
          <div className="detail-body">
            <p className="detail-text">{artist.bio}</p>
            {artist.albums.map(album => {
              const albumUrl = `/images/albums/${album.cover}.jpg`;
              return (
                <div className="card">
                  <img src={albumUrl} alt={album.cover} className="card-img" />
                  <div className="card-img-overlay">
                    <h4 className="card-title">{album.title}</h4>
                    <p className="card-text">{album.year}</p>
                  </div>
                </div>
              )
            })}
            {artist.genre.split(',').map(tag => {
              return <span className="tag" key={tag}>{tag}</span>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Artist;
