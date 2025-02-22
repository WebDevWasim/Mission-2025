import { useContext } from "react";
import { products } from "../../mockData/Products.json";
import CartContext from "../../contexts/cartContext";
import "./Products.css";

const Products = () => {
  const { addItem } = useContext(CartContext);
  return (
    <div className="products">
      {products.map((product) => {
        const { id, name, image, price, description } = product;
        return (
          <div className="productItem" key={id}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>$ {price}</p>
            <button type="button" onClick={() => addItem(product)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
