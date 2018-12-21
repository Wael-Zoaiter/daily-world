import React, { Component } from 'react';
import Reveal from 'react-reveal';
import { emptyCards } from '../utilities';
import { Link } from 'react-router-dom';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    showMore = () => {
        this.setState(prevState => ({
            show: !prevState.show
        }));
    }

    moviesStructure = (from, to) => {        
        return this.props.movies.results.slice(from, to).map((movie, index) => {
            return (
                <div key={movie.id} className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <Reveal effect="animated fadeIn">
                        <Link to={{pathname: `/movies/${movie.id}`, state: movie}}>
                            <div className="card">
                                <div className="card-header">
                                    <h6 className="card-title">{movie.title}</h6>
                                </div>
                                <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
                                <div className="card-body">
                                    <p className="card-text">{movie.overview}</p>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-6">
                                            <span className="author">{movie.release_date}</span>
                                        </div>
                                        <div className="col-6">
                                            <span className="tags">{movie.vote_average}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Reveal>
                </div>
            )
        })
    }

    render() {
        let movies = null;
        if (!this.props.movies) {
            movies = emptyCards(6, 'col-lg-2 col-md-3 col-sm-4 col-xs-6');
        } else {
            if (!this.state.show) {
                movies = this.moviesStructure(0,6);
            } else {
                movies = this.moviesStructure(0,20);
            }
        }
        const showButton = (
            <span className="show-more" onClick={this.showMore}>{!this.state.show ? 'Show more': 'Show less'}</span>
        )        
        return (
            <div className="movies">
                <div className="container-fluid">
                    <Reveal effect="animated fadeIn">
                        <h2>Movies</h2>
                        <div className="row">
                            {
                                movies
                            }
                            {
                                showButton
                            }
                        </div>
                    </Reveal>
                </div>
            </div>
        )
    }
}

export default Movies;