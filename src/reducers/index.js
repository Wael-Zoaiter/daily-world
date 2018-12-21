import { combineReducers } from 'redux';

// Reducers
import articles from './articles';
import movies from './movies';
import books from './books';
import spinner from './spinner';

const rootReducer = combineReducers({
    articles,
    movies,
    books,
    spinner
});

export default rootReducer;