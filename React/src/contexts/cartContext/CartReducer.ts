export const cartActions = {
  ADD_CART: "ADD_CART",
  REMOVE_CART: "REMOVE_CART",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  const { ADD_CART, REMOVE_CART } = cartActions;
  switch (type) {
    case ADD_CART: {
      return [...state, payload];
    }

    case REMOVE_CART: {
      return state.filter(({ id }) => id !== payload);
    }

    default:
      return state;
  }
};

export default cartReducer;
