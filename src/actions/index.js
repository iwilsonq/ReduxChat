import  {
  ADD_MESSAGE,
  CHANGE_ACTIVE_THREAD
} from './types';

export const addMessage = (text, threadId) => dispatch => {
  dispatch({
    type: ADD_MESSAGE,
    text,
    threadId
  });
};

export const changeActiveThread = threadId => dispatch => {
  dispatch({
    type: CHANGE_ACTIVE_THREAD,
    threadId
  });
};
