import { combineReducers } from 'redux';
import userReducer from 'redux/reducers/userReducer';
import reposReducer from 'redux/reducers/reposReducer';

const rootReducer = combineReducers({
  user: userReducer,
  repos: reposReducer,
});

export default rootReducer;
