import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function ItemCount({ product }) {
  const [count, setCount] = useState(1);
  const [limit, setLimit] = useState(false);
  const [added, setAdded] = useState(false);
  const maxValue = 10;

  const { addItem } = useContext(CartContext);

  useEffect(() => {
  }, [limit]);

  function sumar() {
    if (count < maxValue) {
      setCount(count + 1);
    } else {
      setLimit(true);
    }
  }

  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function addToCart() {
    addItem({ ...product, quantity: count });
    setAdded(true);
  }

  if (added) {
    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <p>Agregado ✅</p>
        <Link to="/cart">
          <button>Ir al carrito</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="counter">
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button onClick={restar}>-</button>
        <p>{count}</p>
        <button onClick={sumar}>+</button>
      </div>
      {limit && <p>Alcanzaste el máximo de productos</p>}
      <button onClick={addToCart}>Agregar</button>
    </div>
  );
}

export default ItemCount;