import Item from "./Item";
import getData, { getProductsByCategory } from "../data/firestoreService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const { catParam } = useParams();

  useEffect(() => {
    if (catParam) {
      getProductsByCategory(catParam)
        .then((data) => setProductos(data))
        .catch(() => setProductos([]));
    } else {
      getData().then((data) => setProductos(data));
    }
  }, [catParam]);

  return (
    <section className="itemlist">
      <h3>{props.greeting}</h3>
      <div className="grid">
        {productos.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default ItemListContainer;