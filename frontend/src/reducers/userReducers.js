import {
  USER_LOGIN_FAIL,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_PROFILE_FAIL,
  USER_PROFILE_LOGOUT,
  USER_PROFILE_START,
  USER_PROFILE_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_START,
  USER_UPDATE_PROFILE_SUCCESS,
} from "../constant/userConstant";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        isLoading: false,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        isLoading: false,
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const userProfileReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_PROFILE_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case USER_PROFILE_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };
    case USER_PROFILE_LOGOUT:
      return { user: {} };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        isLoading: false,
        success: true,
      };
    case USER_UPDATE_PROFILE_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
