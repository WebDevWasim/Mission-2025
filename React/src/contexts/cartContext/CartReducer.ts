import { Id, Product } from "../../components/products/Products";

export const cartActions = {
  ADD_CART: "ADD_CART",
  REMOVE_CART: "REMOVE_CART",
};

type CartState = Product[];

type Action = {
  type: string;
  payload: Product | Id;
};

const cartReducer = (state: CartState, action: Action): CartState => {
  const { type, payload } = action;
  const { ADD_CART, REMOVE_CART } = cartActions;
  switch (type) {
    case ADD_CART: {
      return [...state, payload as Product];
    }

    case REMOVE_CART: {
      return state.filter(({ id }) => id !== payload);
    }

    default:
      return state;
  }
};

export default cartReducer;
