import { combineReducers } from "redux";

import header from './header';
import officeMap from './officeMap';

const rootReducer = combineReducers({
  header,
  officeMap
});

export default rootReducer;
