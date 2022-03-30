import { SET_LOAD, GET_LEADERS_INFO } from '../constants';

const initialState = {
  isLoaded: false,
  leaders: [
    {
      id: 1,
      photo: 'http://192.168.10.185:8080/img/Test/8.jpg',
      plug: 'http://192.168.10.185:8080/img/Test/PlugFemale.png',
      name: 'Шульга Дарья',
      city: 'СПб',
      group: '2',
      fee: 1924614
    },
    {
      id: 2,
      photo: 'http://192.168.10.185:8080/img/Test/2.jpg',
      plug: 'http://192.168.10.185:8080/img/Test/PlugMale.png',
      name: 'Киласев Святослав',
      city: 'СПб',
      group: '2',
      fee: 1048487
    },
    {
      id: 3,
      photo: 'http://192.168.10.185:8080/img/Test/6.jpg',
      plug: 'http://192.168.10.185:8080/img/Test/PlugMale.png',
      name: 'Ершов Антон',
      city: 'Псков',
      group: '2',
      fee: 858298
    },
    {
      id: 4,
      photo: 'http://192.168.10.185:8080/img/Test/3.jpg',
      plug: 'http://192.168.10.185:8080/img/Test/PlugFemale.png',
      name: 'Трепова Светлана',
      city: 'СПб',
      group: '2',
      fee: 1500000
    },
    {
      id: 5,
      photo: 'http://192.168.10.185:8080/img/Test/1.jpg',
      plug: 'http://192.168.10.185:8080/img/Test/PlugMale.png',
      name: 'Шубный Антон',
      city: 'СПб',
      group: '2',
      fee: 1800000
    },
    {
      id: 6,
      photo: '',
      plug: 'http://192.168.10.185:8080/img/Test/PlugFemale.png',
      name: 'Романов Наталья',
      city: 'Псков',
      group: '4',
      fee: 800120
    },
    {
      id: 7,
      photo: 'http://192.168.10.185:8080/img/Test/5.jpg',
      plug: 'http://192.168.10.185:8080/img/Test/PlugFemale.png',
      name: 'Потс Пеппер',
      city: 'СПб',
      group: '2',
      fee: 798200
    },
    {
      id: 8,
      photo: '',
      plug: 'http://192.168.10.185:8080/img/Test/PlugMale.png',
      name: 'Роджерс Стив',
      city: 'СПб',
      group: '2',
      fee: 980080
    },
    {
      id: 9,
      photo: 'http://192.168.10.185:8080/img/Test/10.jpg',
      plug: 'http://192.168.10.185:8080/img/Test/PlugFemale.png',
      name: 'Романов Наталья',
      city: 'СПб',
      group: '2',
      fee: 760080
    },
    {
      id: 10,
      photo: 'http://192.168.10.185:8080/img/Test/11.jpg',
      plug: 'http://192.168.10.185:8080/img/Test/PlugMale.png',
      name: 'Т`Чала',
      city: 'СПб',
      group: '2',
      fee: 760080
    },
    {
      id: 11,
      photo: 'http://192.168.10.185:8080/img/Test/9.jpg',
      plug: 'http://192.168.10.185:8080/img/Test/PlugMale.png',
      place: 11,
      name: 'Беннер Брюс',
      city: 'СПб',
      group: '2',
      fee: 630080
    },
    {
      id: 12,
      photo: 'http://192.168.10.185:8080/img/Test/9.jpg',
      plug: 'http://192.168.10.185:8080/img/Test/PlugMale.png',
      name: 'Беннер Брюс',
      city: 'СПб',
      group: '2',
      fee: 560080
    },
    {
      id: 13,
      photo: 'http://192.168.10.185:8080/img/Test/9.jpg',
      plug: 'http://192.168.10.185:8080/img/Test/PlugMale.png',
      name: 'Беннер Брюс',
      city: 'СПб',
      group: '2',
      fee: 310080
    },
    {
      id: 14,
      photo: 'http://192.168.10.185:8080/img/Test/9.jpg',
      plug: 'http://192.168.10.185:8080/img/Test/PlugMale.png',
      name: 'Беннер Брюс',
      city: 'СПб',
      group: '2',
      fee: 60080
    }
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
