import { combineReducers } from 'redux';
import threadReducer from './threadReducer';
import activeThreadIdReducer from './activeThreadReducer';
import userReducer from './userReducer';

export default combineReducers({
  threads: threadReducer,
  activeThreadId: activeThreadIdReducer,
  users: userReducer
});
