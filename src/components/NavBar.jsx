import CartWidget from "./CartWidget";

function NavBar(){
  return (
    <nav className="navbar">
      <div className="logo">🍔 Burger Mc</div>
      <ul className="nav-links">
        <li><a href="/">Hamburguesas</a></li>
        <li><a href="/">Papas Fritas</a></li>
        <li><a href="/">Bebidas</a></li>
      </ul>
      <CartWidget />
    </nav>
  )
}
export default NavBar;