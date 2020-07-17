import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../src/Reducers/Reducers';

ReactDOM.render( <Provider store = { createStore( reducer, applyMiddleware( thunk ) ) }> <App /> </Provider>, document.getElementById('root') );