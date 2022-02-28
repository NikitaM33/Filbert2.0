import { combineReducers } from "redux";

import header from './header';
import officeMap from './officeMap';
import etiquette from './etiquette';
import foodCort from './foodCort';

const rootReducer = combineReducers({
  header,
  officeMap,
  etiquette,
  foodCort
});

export default rootReducer;
