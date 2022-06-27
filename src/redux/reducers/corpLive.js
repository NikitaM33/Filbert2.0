import { SET_BIRTHDAYS, SET_TODAY_BIRTHDAY } from '../constants';

const initialState = {
  todayUserBirth: [],
  userMonthBirthdays: []
};

// Сделать две базы??? На Mongo и на PHP???
const corpLive = (state = initialState, action) => {
  switch(action.type) {
    case SET_BIRTHDAYS:
      return {
        ...state,
        userMonthBirthdays: action.birthdays,
        todayUserBirth: action.birthdays.filter(today => today.dayOfBirthday == new Date().getDate())
      }

    default:
    return state
  }
};

export default corpLive;
