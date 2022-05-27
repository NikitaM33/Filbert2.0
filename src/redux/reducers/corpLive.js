import { SET_BIRTHDAYS } from '../constants';

const initialState = {
  userBirth: [
    {
      id: 100,
      photo: 'http://192.168.10.185:8080/img/Test/1.jpg',
      name: 'Сернецкий Николай',
      depart: 'Руководитель отдела УСВД',
      corpCongrat: 'Желаем Вам в работе вдохновенья, В кругу семьи - тепла и доброты. Среди друзей - любви и уваженья И в жизни сбывшейся мечты.',
      commonCongrats: [
        {
          id: 101,
          name: 'Кирилл Семенов',
          message: 'С др кароч'
        },
        {
          id: 102,
          name: 'Марина Галушкина',
          message: 'Милочка моя дорогая с Днем рождени тебя. Счастья, здоровья расти большой не будь лапшой!!'
        },
        {
          id: 103,
          name: 'Екатерина Веретинская',
          message: 'С др кароч'
        }
      ]
    },
    {
      id: 107,
      photo: 'http://192.168.10.185:8080/img/Test/2.jpg',
      name: 'Чернецкий Олег',
      depart: 'Руководитель отдела УДВИИП',
      corpCongrat: 'Желаем Вам в работе вдохновенья, В кругу семьи - тепла и доброты. Среди друзей - любви и уваженья И в жизни сбывшейся мечты.',
      commonCongrats: [
        {
          id: 104,
          name: 'Кирилл Семенов',
          message: 'С др кароч'
        },
        {
          id: 105,
          name: 'Марина Галушкина',
          message: 'Милочка моя дорогая с Днем рождени тебя. Счастья, здоровья расти большой не будь лапшой!!'
        },
        {
          id: 106,
          name: 'Екатерина Веретинская',
          message: 'С др кароч'
        }
      ]
    },
    {
      id: 108,
      photo: 'http://192.168.10.185:8080/img/Test/3.jpg',
      name: 'Белецкая Ольга',
      depart: 'Руководитель отдела УПИВИД',
      corpCongrat: 'Желаем Вам в работе вдохновенья, В кругу семьи - тепла и доброты. Среди друзей - любви и уваженья И в жизни сбывшейся мечты.',
      commonCongrats: [
        {
          id: 110,
          name: 'Марина Галушкина',
          message: 'Милочка моя дорогая с Днем рождени тебя. Счастья, здоровья расти большой не будь лапшой!!'
        },
        {
          id: 109,
          name: 'Кирилл Семенов',
          message: 'С др кароч'
        },
        {
          id: 111,
          name: 'Екатерина Веретинская',
          message: 'С др кароч'
        },
        {
          id: 112,
          name: 'Марина Gалушкина',
          message: 'Милочка моя дорогая с Днем рождени тебя. Счастья, здоровья расти большой не будь лапшой!!'
        },
      ]
    }
  ]
};

const corpLive = (state = initialState, action) => {
  switch(action.type) {
    default:
    return state
  }
};

export default corpLive;