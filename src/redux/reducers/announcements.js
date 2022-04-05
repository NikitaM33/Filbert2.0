import { SET_ANNOUNCEMENTS } from '../constants';

const initialState = {
  announcementsList: [
    {
      id: 1,
      img: 'http://192.168.10.185:8080/img/foodCort/bar.jpg',
      title: 'Я открыл свой бар! Приглашаю всех!',
      count: 5
    },
    {
      id: 2,
      img: 'http://192.168.10.185:8080/img/foodCort/coffe.jpg',
      title: 'Кто со мной пить кофе в Bazar',
      count: 0
    },
    {
      id: 3,
      img: 'http://192.168.10.185:8080/img/foodCort/cookie.jpg',
      title: 'Угощаю печеньками. Приходите!',
      count: 2
    },
    {
      id: 4,
      img: 'http://192.168.10.185:8080/img/foodCort/pasta.jpg',
      title: 'Гастрономические туры по Европе',
      count: 20
    },
    {
      id: 5,
      img: 'http://192.168.10.185:8080/img/foodCort/poky.jpg',
      title: 'Поки',
      count: 4
    },
    {
      id: 6,
      img: 'http://192.168.10.185:8080/img/Test/9.jpg',
      title: 'Делаю фотосесиию на заказ',
      count: 16
    },
    {
      id: 7,
      img: 'http://192.168.10.185:8080/img/handsh.jpg',
      title: 'Профессионально жму руки. Обращайтесь',
      count: 8
    },
    {
      id: 8,
      img: 'http://192.168.10.185:8080/img/HeadersImg/empresas.jpg',
      title: 'Ни чем не занятая куча народа.',
      count: 11
    },
    {
      id: 9,
      img: 'http://192.168.10.185:8080/img/Test/laptop.jpg',
      title: 'Продам ноут',
      count: 7
    },
    {
      id: 10,
      img: 'http://192.168.10.185:8080/img/Test/newspaper.jpg',
      title: 'У меня есть сканер!',
      count: 12
    },
    {
      id: 11,
      img: 'http://192.168.10.185:8080/img/Test/8.jpg',
      title: 'Test',
      count: 2
    },
    {
      id: 12,
      img: 'http://192.168.10.185:8080/img/Test/4.jpg',
      title: 'Test',
      count: 3
    },
    {
      id: 13,
      img: 'http://192.168.10.185:8080/img/Test/paypal.jpg',
      title: 'Открою доступ к инсте',
      count: 17
    }
  ]
}

const announcements = (state = initialState, action) => {
  switch(action.type) {
    case SET_ANNOUNCEMENTS:
      return {
        ...state,
        announcementsList: action.payload
      }

    default:
      return state
  }
}

export default announcements;
