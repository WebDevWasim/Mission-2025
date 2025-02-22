import { useReducer } from "react";
import CartContext from "./index";
import cartReducer, { cartActions } from "./CartReducer";

const CartState = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addItem = (product) => {
    dispatch({
      type: cartActions.ADD_CART,
      payload: product,
    });
  };
  const removeItem = (id) => {
    dispatch({
      type: cartActions.REMOVE_CART,
      payload: id,
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
