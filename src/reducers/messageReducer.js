import uuidV4 from 'uuid/v4';
import { ADD_MESSAGE } from '../actions/types';

const INITIAL_STATE = [
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
];

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        text: action.payload,
        timestamp: Date.now(),
        id: uuidV4
      };
      return state.concat(newMessage);
    default:
      return state;
  }
}
