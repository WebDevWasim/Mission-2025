import { createContext } from "react";

const initialUserContextValue = {
  userData: {
    loading: false,
    users: [],
    error: "",
  },
  userLoading: () => {},
  userSuccess: (data) => {},
  userError: (error) => {},
};

const UserContext = createContext(initialUserContextValue);

export default UserContext;
