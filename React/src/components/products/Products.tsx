import { useContext } from "react";
import { products } from "../../mockData/Products.json";
import CartContext from "../../contexts/cartContext";
import "./Products.css";

export type Id = string;

export type Product = {
  id: Id;
  name: string;
  description: string;
  image: string;
  price: number;
};

const Products = () => {
  const { addItem } = useContext(CartContext);
  return (
    <div className="products">
      {products.map((product: Product) => {
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
