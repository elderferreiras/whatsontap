import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import reducer from "./store/search/reducer";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

axios.defaults.baseURL = 'https://api.whatsontap.info/';

const composeEnhancers = process.env.NODE_ENV  === 'development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    search: reducer,
});


const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    ));


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
