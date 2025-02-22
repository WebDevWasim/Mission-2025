import { useContext } from "react";
import CartContext from "../../contexts/cartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  // debugger;
  return (
    <div className="cartProducts">
      {cartItems.length ? (
        cartItems.map(({ id, name, image, price, description }) => (
          <div className="cartProductItem" key={id}>
            <div>
              <img src={image} alt={name} />
            </div>
            <div>
              <h3>{name}</h3>
              <p>{description}</p>
              <p>$ {price}</p>
              <button type="button" onClick={() => removeItem(id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>Cart is Empty</div>
      )}
    </div>
  );
};

export default Cart;
