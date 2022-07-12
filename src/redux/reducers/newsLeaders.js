import { SET_LOAD, GET_LEADERS_INFO } from '../constants';

const initialState = {
  isLoaded: false,
  leaders: [
    // {
    //   id: 1,
    //   photo: 'http://192.168.10.185:8080/img/Test/8.jpg',
    //   plug: 'http://192.168.10.185:8080/img/Test/PlugFemale.png',
    //   name: 'Шульга Дарья',
    //   city: 'СПб',
    //   group: '2',
    //   fee: 1924614
    // },

    // Такой JSON попросил у Наиля
    // {
    //   id: 14,
    //   name: 'Брюс',
    //   surname: 'Беннер',
    //   city: 'СПб',
    //   group: 2,
    //   gender: 'male',
    //   fees: '60080'
    // }
  ]
}

const newsLeaders = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOAD:
      return {
        ...state,
        isLoaded: action.patload
      }

    case GET_LEADERS_INFO:
      return {
        ...state,
        leaders: action.payload,
        isLoaded: false
      }

    default:
      return state
  }
}

export default newsLeaders;
