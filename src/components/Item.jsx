import { Link } from "react-router";

export default function Item(props) {
  return (
    <div className="item-card">
      <img src={props.img} alt={props.title} />
      <h4>{props.title}</h4>
      <p>💲{props.price}</p>
      <Link to={`/detail/${props.id}`}>
        <button className="detail-btn">Ver detalle</button>
      </Link>
    </div>
  );
}