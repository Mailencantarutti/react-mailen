import { Link } from "react-router-dom"
export default function Item( props ) {
  const texto = `Soy el producto ${props.title}`
  console.log(texto)
  //inline styles

  return <div className="item-card" style={ { border: "solid 1px grey", backgroundColor: "#131111ff", margin: "10px" } }>
    <img 
      width="120" 
      src={ props.img } alt="remera-roja"
    /> 
      <h4>{ props.title }</h4>
      <p>Precio: ${ props.price }</p>

       <Link to={ `/detail/${props.id}` }>
         <button>Ver detalle</button>
       </Link>
  </div>
}

// * REUTILIZABLE