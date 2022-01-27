import "./Navbar.css"
import logo from "../../assets/img/logoTransparente.png"
import { Link } from "react-router-dom";
import { Context } from "../../store/storeContext";
import { useContext } from "react";

const Navbar = () => {
    const {busqueda, setBusqueda} = useContext(Context)
    const buscar = (e) =>{
        setBusqueda(e)
    }
    return ( 
        <div className="row barraNavegacion">
            <div className="col-3">
                <Link to="/">
                    <img src={logo} alt="Electro-Argenitna" className="logo"/>
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
                <input className="form-control ms-4 me-2 buscador" type="search" placeholder="Busque un producto" aria-label="Search"/>
                <Link to='/busqueda'><button className="buscar fw-bold" type="submit" onSubmit={(e => buscar(e.target.value))}>Buscar</button></Link>
                    
            </div>
            <div className=" persona col-3 d-flex justify-content-end align-items-center">
                <Link to="/account" className="mt-1 miCuenta d-flex">
                    <i class="bi bi-person-circle d-flex"></i>
                    <p className="ms-2">Mi cuenta</p>
                </Link>
                <a className="nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-cart4 carrito"></i>
                    <p className="">1</p>
                </a>
            </div>
        </div>


        // <div className="d-flex barraTotal">  
        //    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //             <div className="container-fluid ">
        //                 <div>
        //                     <img src={logo} alt="eletro-Argentina"/>
        //                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                         <span className="navbar-toggler-icon"></span>
        //                     </button>
        //                 </div>
        //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                     <div>
        //                         <form className="d-flex">
        //                             <input className="form-control me-2" type="search" placeholder="Busque un producto" aria-label="Search"/>
        //                             <button className="btn btn-outline-dark" type="submit">Buscar</button>
        //                         </form>
        //                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                             <li className="nav-item dropdown">
        //                                 <a className="nav-link dropdown-toggle fw-bold categorias ms-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                                 Categorias
        //                                 </a>
        //                                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                                     <li><a className="dropdown-item" href="#">Laptops</a></li>
        //                                     <li><a className="dropdown-item" href="#">Smartwatches</a></li>
        //                                     <li><a className="dropdown-item" href="#">Audio</a></li>
        //                                 </ul>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                     <div>
        //                         <ul className="navbar-nav me-auto mb-2 mb-lg-0 cuenta_carrito">
        //                             <li className="nav-item">
        //                                 <a className="nav-link active fw-bold" aria-current="page" href="#">Mi cuenta</a>
        //                             </li>
        //                             <li className="nav-item fondoCarrito">
        //                                 <a className="nav-link" href="#">
        //                                     <i className="bi bi-cart4 carrito"></i>
        //                                 </a>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //         </div>
        //     </nav>
 
            /* <nav className="navbar navbar-expand-lg navbar-light" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">LOGO CON NOMBRE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <li className="nav-item dropdown ms-4 d-flex">
                        <a className="nav-link dropdown-toggle fw-bold categorias" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Laptop</a></li>
                            <li><a className="dropdown-item" href="#">Smartwatches</a></li>
                            <li><a className="dropdown-item" href="#">Audio</a></li>
                        </ul>
                    </li>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex form">
                            <input className="form-control me-2 buscador" style={{width: "400px"}} type="search" placeholder="Busque un producto" aria-label="Search"/>
                            <button className="btn btn-dark" type="submit">Buscar</button>
                        </form>
                        
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 cuenta_carrito">
                                <li className="nav-item">
                                    <a className="nav-link active fw-bold" aria-current="page" href="#">Mi cuenta</a>
                                </li>
                                <li className="nav-item fondoCarrito">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-cart4 carrito"></i>
                                    </a>
                                </li>
                            </ul>
                        
                    </div>
                </div>
            </nav> */
        // </div>
        
     );
}
 
export default Navbar;