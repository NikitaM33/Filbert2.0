import { announcementsApi } from '@api';
import { SET_ANNOUNCEMENTS, SET_ANNOUNCEMENT_BY_ID, SET_SIGNED } from '../constants';

export const setAnnouncements = (payload) => ({ type: SET_ANNOUNCEMENTS, payload });
export const setAnnounceById = (payload) => ({ type: SET_ANNOUNCEMENT_BY_ID, payload });
export const isSignedIn = (payload) => ({ type: SET_SIGNED, payload });

export const fetchAnnouncement = () => async (dispatch) => {
  try {
    const response = await announcementsApi.fetchAnnouncements();
    // dispatch(setAnnouncements(response));
  } catch(err) {
    console.warn('Fetch announcements error:', err)
  }
}

export const getAnnounceById = (id) => async (dispatch) => {
  try {
    const response = await announcementsApi.getAnnouncementById(id);
    dispatch(setAnnounceById(response));
  } catch(err) {
    console.warn('Fetch announce by id error:', err);
  }
}

export const setSigned = (payload) => async (dispatch) => {
  try {
    const response = await announcementsApi.setAuth(payload);
    dispatch(isSignedIn(response));
  } catch(err) {
    console.warn('Auth is fail! Try again.', err)
  }
}
