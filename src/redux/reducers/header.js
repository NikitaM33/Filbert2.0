import { SET_MANU_ACTIVE, SET_SUB_MENU_ACTIVE } from '../constants/';

const initialState = {
  menuIndex: null,
  subMenuIndex: null,
  mainMenu: [
    {
      name: 'Новости',
      link: 'news'
    },
    {
      name: 'Мероприятия',
      link: 'corpLive'
    },
    {
      name: 'Первый день?',
      link: 'firstDay'
    }
  ],
  eventMenu: [
    'Фото',
    'Видео',
    'Чат'
  ]
}

const header = (state = initialState, action) => {
  switch (action.type) {
    case SET_MANU_ACTIVE:
      return {
        ...state,
        menuIndex: action.payload
      }

    case SET_SUB_MENU_ACTIVE:
      return {
        ...state,
        eventMenu: action.payload
      }

    default:
      return state
  }
}

export default header;
