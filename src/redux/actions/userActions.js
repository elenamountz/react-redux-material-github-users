import * as types from 'redux/consts/types';
import githubService from 'data/github/githubService';

export const fetchUserRequest = () => ({
  type: types.FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (data) => ({
  type: types.FETCH_USER_SUCCESS,
  payload: {
    data,
  },
});

export const fetchUserError = (error) => ({
  type: types.FETCH_USER_ERROR,
  payload: {
    error,
  },
});

export const fetchUser = (username) => async (dispatch) => {
  dispatch(fetchUserRequest());
  try {
    const response = await githubService.fetchUserByUsername(username);
    if (!response) {
      throw Error();
    }
    return dispatch(fetchUserSuccess(response.data));
  } catch (err) {
    return dispatch(fetchUserError(err.response.data));
  }
};
