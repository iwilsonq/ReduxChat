import  {
  ADD_MESSAGE,
  CHANGE_ACTIVE_THREAD,
  NEW_THREAD,
  CLOSE_THREAD
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

export const newThread = (threadId, name) => dispatch => {
  dispatch({
    type: NEW_THREAD,
    threadId,
    name
  });
};

export const closeThread = threadId => (dispatch, getState) => {
  const { activeThreadId, threads } = getState();


  if (activeThreadId === threadId) {

    const nextActiveThreadId = threads.find(thread => {
      return thread.id !== activeThreadId;
    });
    if (threads.length > 1) {
      dispatch({
        type: CHANGE_ACTIVE_THREAD,
        threadId: nextActiveThreadId.id
      });
    }
  }

  dispatch({
    type: CLOSE_THREAD,
    threadId
  });
};
