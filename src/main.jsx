import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CartContextProvider } from './context/cartContext.jsx';
// import { exportProducts } from "./data/firestoreService.js"; // descomentar solo si vas a subir productos

// exportProducts(); // ⚠️ ejecutar una sola vez si necesitas subir productos

createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);