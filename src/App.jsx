import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting={"🍔 Bienvenido a Burger Mc"} />}
        />
        <Route
          path="/detail/:idParam"
          element={<ItemDetailContainer />}
        />
        <Route
          path="/category/:catParam"
          element={<ItemListContainer greeting="Productos" />}
        />
        <Route
          path="*"
          element={<div><h2>Error 404: Página no encontrada</h2></div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
