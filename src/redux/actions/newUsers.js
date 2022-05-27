import { newUsersApi } from '@api';
import { SET_NEW_WORKERS } from '../constants';

export const setNewWorkers = (payload) => ({ type: SET_NEW_WORKERS, payload });

export const getNewWorkers = () => async (dispatch) => {
  try {
    const response = await newUsersApi.fetchNewWorkers();
    dispatch(setNewWorkers(response))
  } catch(err) {
    console.error('Get new users is failed!', err)
  }
}
