import { combineReducers } from 'redux';
import userReducer from 'redux/reducers/userReducer';
import reposReducer from 'redux/reducers/reposReducer';
import followersReducer from './followersReducer';
import followingReducer from './followingReducer';

const rootReducer = combineReducers({
  user: userReducer,
  repos: reposReducer,
  followers: followersReducer,
  following: followingReducer,
});

export default rootReducer;
