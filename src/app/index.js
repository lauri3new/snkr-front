// entry point for webpack.
// import store from configureStore, Pass store to Root component as props
// render react app to root div in index.html

import React from "react";
import { render } from "react-dom";
import Root from "./components/root";
import configureStore from "./configurestore";

const store = configureStore();

render(
  <Root store={store} />,
  window.document.getElementById('root')
);
