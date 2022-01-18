import { SET_MANU_ACTIVE, SET_SUB_MENU_ACTIVE } from '../constants';

export const setMenuActive = (menuIndex) => ({ type: SET_MANU_ACTIVE, payload: menuIndex });
export const setSubMenuActive = (subMenuIndex) => ({ type: SET_SUB_MENU_ACTIVE, payload: subMenuIndex })
