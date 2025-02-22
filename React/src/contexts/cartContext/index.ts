import { createContext } from "react";

export const initialCart = {
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
};

const CartContext = createContext(initialCart);

export default CartContext;
