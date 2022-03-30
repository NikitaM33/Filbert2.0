import { newsAPI } from '@api';
import { SET_IS_MODAL } from '../constants';


export const setIsModal = (payload) => ({type: SET_IS_MODAL, payload});

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
    const response = await newsAPI.fetchWorldNews();

    // console.log('The news response', response.data)
  } catch(err) {
    console.error('News api error.', err);
  }
}

const FetchAllNews = () => {
  return (
    <div>FetchAllNews</div>
  )
}

export default FetchAllNews;
