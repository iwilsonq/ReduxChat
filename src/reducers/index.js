import { combineReducers } from 'redux';
import threadReducer from './threadReducer';
import activeThreadIdReducer from './activeThreadReducer';

export default combineReducers({
  threads: threadReducer,
  activeThreadId: activeThreadIdReducer
});
