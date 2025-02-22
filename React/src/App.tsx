import { BrowserRouter, Routes, Route } from "react-router";
import Products from "./components/products/Products";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import CartState from "./contexts/cartContext/CartState";
import UserState from "./contexts/userContext/UserState";
import Counter from "./components/Counter";
import ReduxCakeCount from "./components/ReduxCakeCount";
import ReduxIcecreamCount from "./components/ReduxIcecreamCount";
import Users from "./components/users/Users";
import "./App.css";

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <CartState>
    //     <Routes>
    //       <Route path="/" element={<Products />} />
    //       <Route path="cart" element={<Cart />} />
    //     </Routes>
    //   </CartState>
    // </BrowserRouter>
    // <Counter />
    <div>
      <ReduxCakeCount />
      <UserState>
        <Users />
      </UserState>
    </div>
  );
}

export default App;
