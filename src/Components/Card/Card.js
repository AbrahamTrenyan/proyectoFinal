import { Link } from "react-router-dom";
import "./Card.css"
import logo from "../../assets/img/categorias/categoria-laptops.jpg"

const Card = (props) => {
    const { imagen, precio, nombre } = props
    return (
            <div className="card" style={{ width: "18rem" }}>
                <img src={imagen} className="card-img-top imagenProducto" alt={nombre}/>
                <div className="card-body">
                    <p className="card-text precio">{precio}</p>
                    <h5 className="card-title producto text-center">{nombre}</h5>
                    <Link to="#" className="btn boton d-flex ">Agregar al carrito</Link>
                </div>
            </div>
       

    );
}

export default Card;