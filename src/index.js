import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";

//4 Reducers: Feeling, Understanding, Support, Comment
// captures feeling integer
const feelingReducer = (state = [], action) => {
  if (action.type === "SET_FEELING") {
    return action.payload;
  }
  return state;
};

// captures understanding integer
const understandingReducer = (state = [], action) => {
  if (action.type === "SET_UNDERSTANDING") {
    return action.payload;
  }
  return state;
};

// captures support integer
const supportReducer = (state = [], action) => {
  if (action.type === "SET_SUPPORT") {
    return action.payload;
  }
  return state;
};

// captures comment text
const commentReducer = (state = [], action) => {
  if (action.type === "SET_COMMENT") {
    return action.payload;
  }
  return state;
};


// This is our global storage for data from our components
const storedData = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentReducer,
  }),
  applyMiddleware(logger)
);

// Provider lets us talk to react with redux
ReactDOM.render(
  <Provider store={storedData}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
