import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Actions
import { MoviesAction, BooksAction } from '../actions';

// Components
import {
    LatestNews,
    Books,
    Movies,
    Slider
} from '../components';

const slides = [
    {
        title: 'News',
        caption: 'Get the latest news around the world.',
        img: '/news-slide.jpg',
    },
    {
        title: 'Movies',
        caption: 'The best movies in the box office.',
        img: '/movies-slide.jpg',
    },
    {
        title: 'Books',
        caption: 'Collection of the best books in the market.',
        img: '/books-slide.jpg',
    }
];

const newsSections = [
    'Arts',
    'Books',
    'Education',
    'Food',
    'Movies'
];

class Home extends Component
{

    componentWillMount = () => {        
        this.props.moviesAction();
        this.props.booksAction();
    }

    render() {
        return (
            <div className="home">
                <Slider items={slides} />
                <LatestNews navs={newsSections} latestArticles={this.props.articles.latest} />
                <Movies movies={this.props.movies.movies} />
                <Books books={this.props.books.books} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {    
    return {
        articles: state.articles,
        movies: state.movies,
        books: state.books
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        moviesAction: () => dispatch(MoviesAction()),
        booksAction: () => dispatch(BooksAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);