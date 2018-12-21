function getNews(news) {
    return {
        type: 'GET_LATEST',
        news
    }
}

function startSpinner() {
    return {
        type: 'START_SPINNER',
        spinner: true
    }
}

function stopSpinner() {
    return {
        type: 'STOP_SPINNER',
        spinner: false
    }
}

export function LatestNewsAction(section) {
    let LatestNewsUrl = `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/${section}/1.json`;
    LatestNewsUrl += '?api-key=deb294ccd35143da8bcb3defa11bb600';
    
    return function(dispatch) {
        dispatch(startSpinner());
        fetch(LatestNewsUrl, {
            method: 'GET',
        }).then(res => {
            return res.json();
        }).then(data => {
            dispatch(stopSpinner());
            dispatch(getNews(data));
        });
    }
}


function getMovies(movies) {
    return {
        type: 'GET_MOVIES',
        movies
    }
}

export function MoviesAction() {
    return function(dispatch) {
        let MoviesUrl = "https://api.themoviedb.org/3/discover/movie";
        MoviesUrl += '?api_key=ee8be8273f7f3dc0c8481ce1e2c6e99c';

        fetch(MoviesUrl, {
            method: 'GET',
        }).then(res => res.json()).then(data => dispatch(getMovies(data)));
    }
}

// https://api.themoviedb.org/3/movie/507569?api_key=ee8be8273f7f3dc0c8481ce1e2c6e99c

function getBooks(books) {
    return {
        type: 'GET_BOOKS',
        books
    }
}

export function BooksAction() {
    return function(dispatch) {
        let BooksUrl = "https://www.googleapis.com/books/v1/volumes?q=SEARCH";

        fetch(BooksUrl, {
            method: 'GET',
        }).then(res => res.json()).then(data => dispatch(getBooks(data)));
    }
}