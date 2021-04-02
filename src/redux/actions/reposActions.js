import githubService from 'data/github/githubService';
import * as types from '../consts/types';

export const fetchReposRequest = () => ({
  type: types.FETCH_REPOS_REQUEST,
});

export const fetchReposSuccess = (data) => ({
  type: types.FETCH_REPOS_SUCCESS,
  payload: {
    data,
  },
});

export const fetchReposError = (error) => ({
  type: types.FETCH_REPOS_ERROR,
  payload: {
    error,
  },
});

export const fetchRepos = (username) => async (dispatch) => {
  dispatch(fetchReposRequest());
  try {
    const response = await githubService.fetchReposByUsername(username);
    if (!response) {
      throw Error();
    }
    return dispatch(fetchReposSuccess(response.data));
  } catch (err) {
    return dispatch(fetchReposError(err.response.data));
  }
};
