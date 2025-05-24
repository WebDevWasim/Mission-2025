import { createContext } from "react";
import { Product } from "../../components/products/Products";

type CartContextProps = {
  cartItems: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext({} as CartContextProps);

export default CartContext;
