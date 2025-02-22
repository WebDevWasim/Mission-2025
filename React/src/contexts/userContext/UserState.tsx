import { useReducer } from "react";
import UserContext from ".";
import userReducer, { initialUserState } from "../../store/user/UserReducer";
import {
  USER_ERROR,
  USER_LOADING,
  USER_SUCCESS,
} from "../../store/user/UserActions";

const UserState = ({ children }) => {
  const [userData, dispatch] = useReducer(userReducer, initialUserState);

  const userLoading = () => {
    dispatch({
      type: USER_LOADING,
    });
  };
  const userSuccess = (data) => {
    dispatch({
      type: USER_SUCCESS,
      payload: data,
    });
  };
  const userError = (error) => {
    dispatch({
      type: USER_ERROR,
      payload: error,
    });
  };

  return (
    <UserContext.Provider
      value={{ userData, userLoading, userSuccess, userError }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
