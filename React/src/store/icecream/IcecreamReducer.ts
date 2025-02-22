import { BUY_ICECREAM } from "./IcecreamActionTypes";

const initialIcecreamState = {
  noOfIcecreams: 302,
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  const { type } = action;
  switch (type) {
    case BUY_ICECREAM: {
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - 1,
      };
    }
    default:
      return state;
  }
};

export default icecreamReducer;
