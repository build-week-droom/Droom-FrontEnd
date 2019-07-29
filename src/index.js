import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {reducers} from './store/reducers/'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(reducers,applyMiddleware(thunk,logger))

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>

, document.getElementById('root'));
