const Navbar = () => {
    return ( 
        <>
            
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                           
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                           
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
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
        </nav>
        <div></div>
            {/* <nav className="navbar navbar-expand-lg navbar-light" >
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
            </nav> */}
        </>
        
     );
}
 
export default Navbar;