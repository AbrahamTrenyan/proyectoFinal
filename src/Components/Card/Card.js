import { Link } from "react-router-dom";
import "./Card.css"
import logo from "../../assets/img/categorias/categoria-laptops.jpg"

const Card = (props) => {
    const { imagen, precio, nombre } = props
    return (
            <div className="card" style={{ width: "18rem"}}>
                <div className="contenedorImagenCard">
                    <img src={imagen} className="imagenProducto" alt={nombre}/>
                </div>
                <div className="card-body">
                    <p className="card-text precio">{precio}</p>
                    <h5 className="card-title tituloProducto ">{nombre}</h5>
                    <Link to="#" className="btn boton">Agregar al carrito</Link>
                </div>
            </div>
       

    );
}

export default Card;