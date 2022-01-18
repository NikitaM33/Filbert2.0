import { counterAPI } from '@api';

export const sendCounter = (pageName) => () => {
  try {
    counterAPI.sendCounterNumber(pageName)
  } catch(error) {
    console.warn('Counter is not refreshed.', error.message)
    return false;
  }
};
