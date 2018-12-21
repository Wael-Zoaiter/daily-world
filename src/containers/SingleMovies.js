import React from 'react';
import Reveal from 'react-reveal';

const SingleMovies = props => {    
    const movie = props.location.state && props.location.state;    
    return (
        <div className="single-card">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Reveal effect="animated fadeInDownBig">
                    <div className="card">
                        <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
                        <img src={`http://image.tmdb.org/t/p/w185/${movie.backdrop_path}`} alt={movie.title} />
                        <div className="card-body">
                            <div className="card-header">
                                <h6 className="card-title">{movie.title}</h6>
                            </div>
                            <p className="card-text">{movie.overview}</p>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-6">
                                    <span className="author">{movie.release_date}</span>
                                </div>
                                <div className="col-6">
                                    <span className="tags">Rate: {movie.vote_average}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Reveal>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SingleMovies;