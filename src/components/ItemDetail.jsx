
import ItemCount from "./ItemCount";
import { FadeLoader } from "react-spinners";

function ItemDetail({ itemData }) {

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
            <ItemCount product={itemData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;