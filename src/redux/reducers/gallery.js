import { SET_ALBUM } from '../constants';

const initialState = {
  albums: [
    {
      id: '123def',
      ulbumCover: 'http://192.168.10.185:8080/img/Test/8March2021.jpg',
      albumName: '8 марта 20218 марта',
      albumYear: '2021'
    },
    {
      id: '234def',
      ulbumCover: 'http://192.168.10.185:8080/img/Test/filbertFort.jpg',
      albumName: 'Форт Филберт',
      albumYear: '2019'
    },
    {
      id: '345def',
      ulbumCover: 'http://192.168.10.185:8080/img/Test/NY2020.jpg',
      albumName: 'Новогодний корпоратив',
      albumYear: '2020'
    },
    {
      id: '456def',
      ulbumCover: 'http://192.168.10.185:8080/img/Test/FamilyDay2019.jpg',
      albumName: 'День семьи',
      albumYear: '2019'
    },
  ],
  albumById: []
}

const gallery = (state = initialState, action) => {
  switch(action.type) {
    case SET_ALBUM:
      return {
        ...state,
        albumById: action.payload
      }

    default:
      return state
  }
}

export default gallery;
