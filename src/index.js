import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';

// Middlewares
import thunk from 'redux-thunk';

// Reducers
import rootReducer from './reducers';

const storeWithMiddleware = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={storeWithMiddleware}>
        <App />
    </Provider>
, document.getElementById('root'));
