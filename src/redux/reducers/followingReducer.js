import * as types from '../consts/types';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const followingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FOLLOWING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_FOLLOWING_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        error: null,
      };
    case types.FETCH_FOLLOWING_ERROR:
      return {
        ...state,
        data: [],
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default followingReducer;
