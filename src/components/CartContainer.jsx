import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { createBuyOrder } from "../data/firestoreService";
import CheckoutForm from "./CheckoutForm";
import { Link } from "react-router-dom";
import "./CartContainer.css";

function CartContainer() {
  const { cart, clearCart, removeItem, getTotalPrice } = useContext(CartContext);
  const [orderCreated, setOrderCreated] = useState(false);

  async function handleCheckout(formData) {
    const orderData = {
      buyer: formData,
      cart,
      total: getTotalPrice(),
      date: new Date(),
    };

    try {
      const response = await createBuyOrder(orderData);
      alert(`🍔 Gracias por tu compra! ID de orden: ${response.id}`);
      setOrderCreated(response.id);
      clearCart();
    } catch (err) {
      console.error("Error creando la orden:", err);
      alert("Ocurrió un error al generar la orden. Revisá la consola.");
    }
  }

  if (orderCreated) {
    return (
      <section className="cart-container success-message">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden: <strong>{orderCreated}</strong></p>
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
      </section>
    );
  }

  if (!cart || cart.length === 0) {
    return (
      <section className="cart-container empty-cart">
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/" className="btn btn-primary">Ver productos</Link>
      </section>
    );
  }

  return (
    <section className="cart-container">
      <h1 className="cart-title">Tu pedido</h1>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>Cantidad: <strong>{item.quantity}</strong></p>
              <p>Precio unitario: ${item.price}</p>
              <p>Subtotal: <strong>${item.price * item.quantity}</strong></p>
            </div>
            <button className="btn btn-remove" onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
        ))}
      </div>

      <hr className="divider" />
      <div className="cart-summary">
        <p className="total">Total: <strong>${getTotalPrice()}</strong></p>
        <button className="btn btn-clear" onClick={clearCart}>Vaciar carrito</button>
      </div>

      <CheckoutForm handleCheckout={handleCheckout} />
    </section>
  );
}

export default CartContainer;