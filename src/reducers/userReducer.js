import { NEW_THREAD } from '../actions';

const INITIAL_STATE = [
  {
    id: 'j-13',
    name: 'Jimmy'
  },
  {
    id: 'h-14',
    name: 'Henry'
  },
  {
    id: 'a-15',
    name: 'Austin'
  },
  {
    id: 'z-16',
    name: 'Zack'
  },
];

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case NEW_THREAD:
      return state;
    default:
      return state;
  }
};

export default userReducer;
