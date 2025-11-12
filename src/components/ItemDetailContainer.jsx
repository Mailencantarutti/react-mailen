import { getProductById } from "../data/firestoreService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [itemData, setItemData] = useState({ loading: true });
  const { idParam } = useParams();

  useEffect(() => {
    if (!idParam) return;
    getProductById(idParam)
      .then((res) => setItemData(res))
      .catch((err) => {
        console.error("Error fetching product:", err);
        setItemData({ loading: false });
      });
  }, [idParam]);

  return <ItemDetail itemData={itemData} />
}

export default ItemDetailContainer;