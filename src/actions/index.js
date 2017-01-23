import  { ADD_MESSAGE } from './types';

export const addMessage = (text, threadId) => dispatch => {
  dispatch({
    type: ADD_MESSAGE,
    text,
    threadId
  });
};
