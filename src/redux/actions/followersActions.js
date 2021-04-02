import githubService from 'data/github/githubService';
import * as types from '../consts/types';

export const fetchFollowersRequest = () => ({
  type: types.FETCH_FOLLOWERS_REQUEST,
});

export const fetchFollowersSuccess = (data) => ({
  type: types.FETCH_FOLLOWERS_SUCCESS,
  payload: {
    data,
  },
});

export const fetchFollowersError = (error) => ({
  type: types.FETCH_FOLLOWERS_ERROR,
  payload: {
    error,
  },
});

export const fetchFollowers = (username) => async (dispatch) => {
  dispatch(fetchFollowersRequest());
  try {
    const response = await githubService.fetchFollowersByUsername(username);
    if (!response) {
      throw Error();
    }
    return dispatch(fetchFollowersSuccess(response.data));
  } catch (err) {
    return dispatch(fetchFollowersError(err.response.data));
  }
};
