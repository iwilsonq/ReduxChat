import  { ADD_MESSAGE } from './types';

export const addMessage = text => dispatch => {
  dispatch({ type: ADD_MESSAGE, payload: text });
};
