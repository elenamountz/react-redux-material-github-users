import githubService from 'data/github/githubService';
import * as types from '../consts/types';

export const fetchFollowingRequest = () => ({
  type: types.FETCH_FOLLOWING_REQUEST,
});

export const fetchFollowingSuccess = (data) => ({
  type: types.FETCH_FOLLOWING_SUCCESS,
  payload: {
    data,
  },
});

export const fetchFollowingError = (error) => ({
  type: types.FETCH_FOLLOWING_ERROR,
  payload: {
    error,
  },
});

export const fetchFollowing = (username) => async (dispatch) => {
  dispatch(fetchFollowingRequest());
  try {
    const response = await githubService.fetchFollowingByUsername(username);
    if (!response) {
      throw Error();
    }
    return dispatch(fetchFollowingSuccess(response.data));
  } catch (err) {
    return dispatch(fetchFollowingError(err.response.data));
  }
};
