import { combineReducers } from "redux";

import header from './header';
import officeMap from './officeMap';
import etiquette from './etiquette'

const rootReducer = combineReducers({
  header,
  officeMap,
  etiquette
});

export default rootReducer;
