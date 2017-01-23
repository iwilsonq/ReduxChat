import {
  CHANGE_ACTIVE_THREAD
} from '../actions/types';

const activeThreadIdReducer = (state = 'j-13', action) => {
  switch(action.type) {
    case CHANGE_ACTIVE_THREAD: {
      const currentActiveThread = document.getElementsByClassName('active')[0];

      if (currentActiveThread)
        currentActiveThread.classList.remove('active');

      const newActiveThread = document.getElementById(action.threadId);
      newActiveThread.classList.add('active');

      return action.threadId;
    }
    default:
      return state;
  }
};

export default activeThreadIdReducer;
