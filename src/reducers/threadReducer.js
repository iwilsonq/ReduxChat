import uuidV4 from 'uuid/v4';
import messageReducer from './messageReducer';
import { ADD_MESSAGE, NEW_THREAD, CLOSE_THREAD } from '../actions/types';

const findThreadById = (threads, threadId) => {
  return threads.findIndex(thread => thread.id === threadId);
};

const INITIAL_STATE = [
  {
    id: 'j-13',
    name: 'Jimmy',
    messages: messageReducer([
      {
        text: 'Hey there',
        timestamp: 1484803233022,
        id: uuidV4()
      },
      {
        text: 'What is the weather like?',
        timestamp: 1484803236022,
        id: uuidV4()
      }
    ], {})
  },
  {
    id: 'h-14',
    name: 'Henry',
    messages: messageReducer([
      {
        text: 'Herro',
        timestamp: 1484803239033,
        id: uuidV4()
      }
    ], {})
  }
];

const threadReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_MESSAGE: {
      const threadIndex = findThreadById(state, action.threadId);
      const oldThread = state[threadIndex];
      const newThread = {
        ...oldThread,
        messages: messageReducer(oldThread.messages, action)
      };

      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(threadIndex + 1)
      ];
    }
    case NEW_THREAD: {
      const newThread = {
        id: action.threadId,
        name: action.name,
        messages: messageReducer([], {})
      };

      return [
        ...state,
        newThread
      ];
    }
    case CLOSE_THREAD: {
      const threadIndex = findThreadById(state, action.threadId);
      return [
        ...state.slice(0, threadIndex),
        ...state.slice(threadIndex + 1)
      ];
    }
    default:
      return state;
  }
};

export default threadReducer;
