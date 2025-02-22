import axios from "axios";

export const USER_LOADING = "USER_LOADING";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_ERROR = "USER_ERROR";

const userLoading = () => {
  return {
    type: USER_LOADING,
  };
};
const userSuccess = (data) => {
  return {
    type: USER_SUCCESS,
    payload: data,
  };
};
const userError = (error) => {
  return {
    type: USER_ERROR,
    payload: error,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(userLoading());
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(userSuccess(response.data));
    } catch (error) {
      dispatch(userError(error.message));
    }
  };
};
