import { lazy, Suspense } from "react";
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
import PortalModal from "./components/PortalModal";
import "./App.css";
import Counter1 from "./components/hoc/Counter1";
import Search from "./components/Search";

// const Cart = lazy(() => import("./components/cart/Cart"));

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <CartState>
    //     <Suspense fallback={<h1>Loading...</h1>}>
    //       <Routes>
    //         <Route path="cart" element={<Cart />} />
    //         <Route path="/" element={<Products />} />
    //       </Routes>
    //     </Suspense>
    //   </CartState>
    // </BrowserRouter>
    // <PortalModal />
    // <Counter1 text="Count" />
    <Search />
    // <div>
    //   <ReduxCakeCount />
    //   <UserState>
    //     <Users />
    //   </UserState>
    // </div>
  );
}

export default App;
