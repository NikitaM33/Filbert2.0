import { newsAPI } from '@api';
import {
  SET_IS_MODAL,
  SET_INNER_NEWS,
  SET_INNER_NEWS_BY_ID,
  SET_WORLD_NEWS_BY_ID,
  SET_COLLECTION_NEWS_BY_ID
} from '../constants';


export const setIsModal = (payload) => ({ type: SET_IS_MODAL, payload });
export const setInnerNews = (payload) => ({ type: SET_INNER_NEWS, payload });
export const setInnerNewsById = (payload) => ({ type: SET_INNER_NEWS_BY_ID, payload });
export const setWorldNewsById = (payload) => ({ type: SET_WORLD_NEWS_BY_ID, payload });
export const setCollectionNewsById = (payload) => ({ type: SET_COLLECTION_NEWS_BY_ID, payload });

export const openNewsModal = (newsId) => async(dispatch) => {
  try {
    // const response = await newsAPI.fetchChoosenNews(newsId);
    dispatch(setIsModal(true));
  } catch(err) {
    console.error('Modal news error:', err)
  }
}

export const fetchWorldNews = () => async (dispatch) => {
  try {
    const response = await newsAPI.getWorldNews();

  } catch(err) {
    console.error('World news api error!', err);
  }
}

export const fetchInnerNews = () => async(dispatch) => {
  try {
    const response = await newsAPI.getInnerNews();
    dispatch(setInnerNews(response.data));
  } catch (err) {
    console.error('Inner news api error!', err)
  }
}


// Запрос новостей по id
export const fetchInnerNewsById = (newsId) => async(dispatch) => {
  try {
    const response = await newsAPI.getNewsById(newsId);
    dispatch(setInnerNewsById(response.data));
  } catch(err) {
    console.error('News by id error:', err)
  }
}

export const fetchWorldNewsById = (newsId) => async(dispatch) => {
  try {
    const response = await newsAPI.getNewsById(newsId);
    dispatch(setWorldNewsById(response));
  } catch(err) {
    console.error('News by id error:', err)
  }
}

export const fetchCollectionNewsById = (newsId) => async(dispatch) => {
  try {
    const response = await newsAPI.getNewsById(newsId);
    dispatch(setCollectionNewsById(response));
  } catch(err) {
    console.error('News by id error:', err)
  }
}


// Запрос всех новостей
const FetchAllNews = () => {
  return (
    <div>FetchAllNews</div>
  )
}

export default FetchAllNews;
