import { Link } from "react-router-dom";
import "./Card.css"
const Card = (props) => {
    const { imagen, precio, nombre, id } = props
    return (
            <div className="card" style={{ width: "18rem"}}>
                <div className="contenedorImagenCard">
                    <img src={imagen} className="imagenProducto" alt={nombre}/>
                </div>
                <div className="card-body">
                    <p className="card-text precio">${precio}</p>
                    <h5 className="card-title tituloProducto ">{nombre}</h5>
                    <Link to={`/${id}`} className="btn boton">Ver producto</Link>
                </div>
            </div>

    );
}

export default Card;