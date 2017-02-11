// root reducer

import { combineReducers } from 'redux';
import productsReducer from './products';
import chosenReducer from './chosenshirt';
import galleryReducer from './gallery';
import leagueReducer from './league';

export default combineReducers({
  products: productsReducer,
  chosen: chosenReducer,
  gallery: galleryReducer,
  league: leagueReducer
});
