import * as types from 'redux/consts/types';

const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        error: null,
      };
    case types.FETCH_USER_ERROR:
      return {
        ...state,
        data: {},
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default userReducer;
