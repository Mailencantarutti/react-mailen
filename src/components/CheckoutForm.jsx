import { useState } from "react";

export default function CheckoutForm({ handleCheckout }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    handleCheckout(formData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function clearForm() {
    setFormData({ username: "", email: "", phone: "" });
  }

  return (
    <section className="checkout-form">
      <form onSubmit={handleSubmit}>
        <h4>Ingresa tus datos personales</h4>

        <label>Nombre
          <input name="username" type="text" value={formData.username} onChange={handleChange} required />
        </label>

        <label>Email
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>Teléfono
          <input name="phone" type="tel" value={formData.phone} onChange={handleChange} />
        </label>

        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">Confirmar</button>
          <button type="button" className="btn btn-clear" onClick={clearForm}>Limpiar</button>
        </div>
      </form>
    </section>
  );
}