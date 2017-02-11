import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Reducer from "./reducers/index";
import { loadState, saveState } from "./localStorage";

// configureStore creates store from root reducer, persistedState allows state
// to be stored in browser local storage, applying middleware logger (for dev)
// and thunk (allows asynchronous actions i.e AJAX)

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    Reducer,
    persistedState,
    // logger in deveolpment
   applyMiddleware(logger(), thunk),
    applyMiddleware(thunk)
  );
  store.subscribe(() => {
    saveState({
      products: store.getState().products
    });
  });
  return store;
};

export default configureStore;
