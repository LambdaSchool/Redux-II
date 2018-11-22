import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import App from "./App";
import  friendsReducer  from "./reducers";
import "./index.css";

const middleWare = applyMiddleware(logger, thunk)
const store = createStore(friendsReducer, middleWare);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
