import { newUsersApi } from '@api';
import { SET_NEW_WORKERS } from '../constants';

export const setNewWorkers = (payload) => ({ type: SET_NEW_WORKERS, payload });

export const fetchNewWorkers = () => async (dispatch) => {
  try {
    const response = await newUsersApi.getNewWorkers();
    dispatch(setNewWorkers(response.data));
  } catch(err) {
    console.error('Get new users is failed!', err)
  }
}
