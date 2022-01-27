import { Link } from "react-router-dom";
import "./Cards.css"
import logo from "../../assets/img/categorias/categoria-laptops.jpg"

const Cards = () => {
    return ( 
        <div className="card tarjeta ms-5" style={{width: "18rem"}}>
            <img src={logo} className="card-img-top imagenProducto" alt="..."/>
            <div className="card-body">
                <p className="card-text precio">$110.000</p>
                <h5 className="card-title producto text-center">Lenovo Thinkpad 8 RAM 256 SSD</h5>
                <Link to="#" className="btn boton d-flex justify-content-center">Ver producto</Link>
            </div>
        </div>


     );
}
 
export default Cards;