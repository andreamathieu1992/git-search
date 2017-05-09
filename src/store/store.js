import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Search from '../containers/container.js';
import takeApp from '../reducers/reducers.js';

const store = createStore(takeApp, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <Search />
    </Provider>,
    document.getElementById('root')
);
