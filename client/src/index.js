// React Dependencies

import React from "react";
import ReactDOM from "react-dom";

// React Redux Dependencies

import { Provider } from 'react-redux'; // Keep track of store and access anywhere in App
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers';


import App from './App';
import reportWebVitals from './reportWebVitals';
//importing font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);