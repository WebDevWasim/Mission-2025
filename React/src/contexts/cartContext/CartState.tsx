import { useReducer, FC, ReactNode } from "react";
import CartContext from "./index";
import cartReducer, { cartActions } from "./CartReducer";
import { Id, Product } from "../../components/products/Products";

type CartProps = {
  children: ReactNode;
};

const CartState: FC<CartProps> = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addItem = (product: Product) => {
    dispatch({
      type: cartActions.ADD_CART,
      payload: product,
    });
  };
  const removeItem = (id: Id) => {
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
