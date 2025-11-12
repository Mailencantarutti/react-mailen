import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { countItemsInCart } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <Link to="/cart" aria-label="Ir al carrito">
        🛒 {countItemsInCart ? countItemsInCart() : 0}
      </Link>
    </div>
  );
}

export default CartWidget;