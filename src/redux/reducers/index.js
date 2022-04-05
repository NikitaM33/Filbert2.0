import { combineReducers } from "redux";

import header from './header';
// Main page
import officeMap from './officeMap';
import etiquette from './etiquette';
import foodCort from './foodCort';
// News page
import newsLeaders from './newsLeaders';
import news from './news';
import announcements from './announcements';

const rootReducer = combineReducers({
  header,
  officeMap,
  etiquette,
  foodCort,
  newsLeaders,
  news,
  announcements
});

export default rootReducer;
