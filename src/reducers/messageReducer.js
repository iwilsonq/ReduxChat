import uuidV4 from 'uuid/v4';
import { ADD_MESSAGE } from '../actions/types';

const messageReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        text: action.text,
        timestamp: Date.now(),
        id: uuidV4()
      };
      return state.concat(newMessage);
    default:
      return state;
  }
};

export default messageReducer;
