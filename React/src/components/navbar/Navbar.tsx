import { Link } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </div>
  );
};

export default Navbar;
