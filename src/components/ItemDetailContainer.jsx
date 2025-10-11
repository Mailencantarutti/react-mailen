import { getProductById } from "../data/mockAPIService";
import ItemCount from "./ItemCount";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";

function ItemDetailContainer() {
  const [itemData, setItemData] = useState({ loading: true });
  const { idParam } = useParams();

  useEffect(() => {
    getProductById(idParam).then((res) => setItemData(res));
  }, [idParam]);

  return (
    <div className="item-detail">
      {itemData.loading ? (
        <FadeLoader color={"#ec791bff"} size={50} />
      ) : (
        <div className="detail-card">
          <img src={itemData.img} alt={itemData.title} />
          <div>
            <h2>{itemData.title}</h2>
            <p>{itemData.description}</p>
            <p className="price">💲{itemData.price}</p>
            <ItemCount />
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;