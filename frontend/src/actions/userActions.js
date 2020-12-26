import axios from "axios";
import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_PROFILE_START,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_UPDATE_PROFILE_START,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
} from "../constant/userConstant";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_START });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_START });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/",
      { name, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const getUserProfile = (path) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROFILE_START });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${path}`, config);

    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_PROFILE_START });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const logoutUser = () => async (disptach) => {
  disptach({ type: USER_LOGOUT });
  localStorage.removeItem("userInfo");
};
