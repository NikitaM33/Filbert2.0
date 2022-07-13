import { galeryAPI } from '@api';
import { SET_ALBUM } from '../constants';

const setAlbum = (payload) => ({ type: SET_ALBUM, payload });

export const fetchVideoAlbums = () => async (dispatch) => {
  try {
    const response = await galeryAPI.getVideoAlbums();
    dispatch(response);
  } catch(err) {
    console.error('Video albums doesn`t fetch', err);
  }
}

export const fetchAlbumById = (id) => async(dispatch) => {
  try {
    const response = await galeryAPI.getAlbumById(id);
    dispatch(setAlbum(response));
  } catch(err) {
    console.error('Album by id doesn`t fetch', err);
  }
}
