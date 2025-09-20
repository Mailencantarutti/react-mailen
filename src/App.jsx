import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <h1>Burger Mc</h1>
        <h2>Las Mejores Hamburguesas Caseras</h2>
      </div>
      <ItemListContainer greeting="¡Bienvenidos a mi tienda online!" />
    </>
  );
}

export default App;
