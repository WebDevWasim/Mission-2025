import { BUY_CAKE } from "./CakeActionTypes";

const initialCakeState = {
  noOfCakes: 102,
};

const cakeReducer = (state = initialCakeState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BUY_CAKE: {
      return {
        ...state,
        noOfCakes: state.noOfCakes - payload,
      };
    }
    default:
      return state;
  }
};

export default cakeReducer;
