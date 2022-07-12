import { galeryAPI } from '@api';
import { SET_ALBUM } from '../constants';

const setAlbum = (payload) => ({ type: SET_ALBUM, payload });

export const fetchAlbumById = (id) => async(dispatch) => {
  try {
    const response = await galeryAPI.getAlbumById(id);
    dispatch(setAlbum(response));
  } catch(err) {
    console.error('Album by id doesn`t fetch', err);
  }
}
