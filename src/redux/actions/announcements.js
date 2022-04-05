import { announcementsApi } from '@api';
import { SET_ANNOUNCEMENTS } from '../constants';

export const setAnnouncements = (payload) => ({ type: SET_ANNOUNCEMENTS, payload });

export const fetchAnnouncement = () => async (dispatch) => {
  try {
    const response = await announcementsApi.fetchAnnouncements();
    // dispatch(setAnnouncements(response));
  } catch(err) {
    console.warn('Fetch announcements error:', err)
  }
}
