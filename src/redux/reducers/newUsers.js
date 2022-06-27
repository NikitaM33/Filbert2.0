import { SET_NEW_WORKERS } from '../constants';

const initialState = {
  newWorkers: []
}

const newUsers = (state = initialState, action) => {
  switch(action.type) {
    case SET_NEW_WORKERS:
      return {
        ...state,
        newWorkers: action.payload
      }

    default:
      return state
  }
}

export default newUsers;
