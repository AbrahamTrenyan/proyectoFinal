import "./Navbar.css"
import logo from "../../assets/img/logoTransparente.png"
import { Link } from "react-router-dom";
import Login from "../Login";
import Logout from "../Logout";
import Account from "../../pages/Account/Account";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../store/storeContext";
const Navbar = () => {

    const { isAuthenticated } = useAuth0()
    let navigate = useNavigate();
    const { busqueda, handleChange, carrito } = useContext(Context)
    const handleSubmit = () => {
        navigate("/busqueda")
    }
    return (
        <div className="row barraNavegacion">
            <div className="d-flex  justify-content-around barraNavegacion">
                <div className="col-3">
                    <Link to="/">
                        <img src={logo} alt="Electro-Argenitna" className="logo" />
                    </Link>
                </div>
                <div className="col-6 d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle fw-bold categorias" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/laptops">Laptops</Link></li>
                                <li><Link className="dropdown-item" to="/smartwatches">Smartwatches</Link></li>
                                <li><Link className="dropdown-item" to="/audio">Audio</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form onSubmit={handleSubmit} className="d-flex">
                        <input className="form-control ms-4 me-2 buscador" type="search" placeholder="Busque un producto" aria-label="Search" onChange={(e) => handleChange(e)} />
                        <Link to='/busqueda'><button className="buscar fw-bold" type="submit" value={busqueda} >Buscar</button></Link>
                    </form>

                </div>
                <div className=" persona col-3 d-flex justify-content-end align-items-center text-center">
                    {isAuthenticated ?
                        <>
                            <Account />
                            <Logout />
                        </>
                        :
                        <Login />
                    }

                    <Link to="/carrito" className="nav-link d-flex justify-content-center align-items-center">
                        <i className="bi bi-cart4 carrito"></i>
                        <p className="">{carrito.length}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
