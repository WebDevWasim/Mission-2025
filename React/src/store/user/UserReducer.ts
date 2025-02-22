import { USER_ERROR, USER_LOADING, USER_SUCCESS } from "./UserActions";

export const initialUserState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialUserState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADING: {
      return {
        loading: true,
        users: [],
        error: "",
      };
    }
    case USER_SUCCESS: {
      return {
        loading: false,
        users: payload,
        error: "",
      };
    }
    case USER_ERROR: {
      return {
        loading: false,
        users: [],
        error: payload,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
