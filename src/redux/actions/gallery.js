import { galeryAPI } from '@api';
import { SET_VIDEOS, SET_ALBUM, SET_VIDEO_ALBUM } from '../constants';

const setVideos = (payload) => ({ type: SET_VIDEOS, payload });
const setAlbum = (payload) => ({ type: SET_ALBUM, payload });
const setVideoAlbum = (payload) => ({ type: SET_VIDEO_ALBUM, payload });

export const fetchVideoAlbums = () => async (dispatch) => {
  try {
    const response = await galeryAPI.getVideoAlbums();
    dispatch(setVideos(response));
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

export const fetchVideoAlbumById = (id) => async (dispatch) => {
  try {
    const response = await galeryAPI.getVideoAlbumById(id);
    dispatch(setVideoAlbum(response));
  } catch(err) {
    console.error('Fetching video album by id has fail', err);
  }
}
