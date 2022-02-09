import { SET_ACTIVE_OFFICE } from '../constants';

export const setOfficeActive = (officeIndex) => ({ type: SET_ACTIVE_OFFICE, payload: officeIndex });
