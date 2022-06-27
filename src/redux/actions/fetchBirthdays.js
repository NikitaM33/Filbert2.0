import { birthdaysAPI } from '@api';
import { SET_BIRTHDAYS, SET_TODAY_BIRTHDAY } from '../constants';

export const setBirthdays = (birthdays) => ({ type: SET_BIRTHDAYS, birthdays });

export const fetchBirthdays = () => async (dispatch) => {
  try {
    const response = await birthdaysAPI.getBirthdays();

    dispatch(setBirthdays(response.data));
  } catch(err) {
    console.warn('Today birthdays fetch is fail', err);
  }
}
