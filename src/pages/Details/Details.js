import "./Details.css"
import foto1 from "../../assets/img/productos/producto1.jpg"
import foto2 from "../../assets/img/productos/producto1b.jpg"

const Details = () => {
    return (    
        <>
            <div className="card mb-3 cardGeneral ms-2 me-2 mt-4" style={{maxwidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">

                    <div className="container Details">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                 <div className="carousel-item active">
                                     <img src={foto1} className="d-block img " alt="celular"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={foto2} className="d-block img " alt="celular-b"/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                 <span className="visually-hidden">Previous</span>
                             </button>
                             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                             </button>
                        </div>   
                        </div>
                 {/* /////////////////// */}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-center nombreProducto">Notebook Exo Smart XL4-H3548 gris 15.6</h5>
                            <p className="card-text text-center mt-5">La notebook Exo Smart XL4-H3548 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.</p>
                            <div className="d-flex justify-content-evenly">
                            <p className="card-text precio fw-bold text-center">$79.999</p>
                           
                                <button className="botonAgregar fw-bold ">Agregar a mi carrito</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </>
    );
}
 
export default Details;