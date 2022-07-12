import { topCollectorsAPI } from '@api';
import { SET_LOAD, GET_LEADERS_INFO } from '../constants';

export const setLoad = (payload) => ({ type: SET_LOAD, payload });
export const setLeaders = (payload) => ({ type: GET_LEADERS_INFO, payload });

export const fetchLeadersInfo = () => async (dispatch) => {
  dispatch(setLoad(true));

  try {
    const response = await topCollectorsAPI.getLeadersInfo();
    dispatch(setLeaders(response.data));
  } catch (err) {
    console.error('Fatal error! Can`t fetch top leaders.', err)
  }
}
