const Navbar = () => {
    return ( 
        <div className="row">
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
        </div>
     );
}
 
export default Navbar;