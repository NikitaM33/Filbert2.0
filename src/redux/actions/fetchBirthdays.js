import { birthdaysAPI } from '@api';
import { SET_BIRTHDAYS } from '../constants';

export const setBirthdays = (payload) => ({ type: SET_BIRTHDAYS, payload });

export const fetchBirthdays = () => async (dispatch) => {
  try {
    const response = await birthdaysAPI.getBirthdays();
    dispatch(setBirthdays(response));
  } catch(err) {
    console.warn('Today birthdays fetch is fail', err);
  }
}
