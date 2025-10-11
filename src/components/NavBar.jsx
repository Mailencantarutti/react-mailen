import CartWidget from "./CartWidget";
import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🍔 Burger Mc
      </Link>
      <div className="nav-links">
        <Link to="/category/hamburguesas">Hamburguesas</Link>
        <Link to="/category/papas fritas">Papas Fritas</Link>
        <Link to="/category/bebidas">Bebidas</Link>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;