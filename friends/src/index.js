import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {FriendsReducer} from "./reducers/FriendsReducer.js";
import { applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { createStore } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
    FriendsReducer,applyMiddleware(thunk, logger)
  );

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();