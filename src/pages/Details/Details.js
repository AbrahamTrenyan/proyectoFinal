import { useParams } from "react-router-dom";
import "./Details.css"
import { useContext, useEffect, useState } from "react";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import { Context } from "../../store/storeContext";



const Details = () => {
    const{id} = useParams()
  const {productsList, carrito, setCarrito} = useContext(Context)
  const elemento = productsList.filter(producto=> producto.id ==id)
  const agregar = (prod, id) =>{
    const error = carrito.find(cart=>cart.id===id)
    if (error){
        return
    }
    setCarrito([...carrito, prod])
}
    return (    
        <>  
            {elemento!== null ?
                <div key={id} className="card mb-3 cardGeneral ms-2 me-2 mt-4" style={{maxwidth: "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">

                        <div className="container Details">
                            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={elemento[0].imagen} className="d-block img "/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={elemento[0].otraImagen} className="d-block img " />
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
                                <h5 className="card-title text-center nombreProducto">{elemento[0].nombre}</h5>
                                <p className="card-text text-center mt-5">{elemento[0].descripcion}</p>
                                <div className="d-flex justify-content-evenly">
                                <p className="card-text precio fw-bold text-center">${elemento[0].precio}</p>
                            
                                    <button className="botonAgregar fw-bold " onClick={()=>agregar(elemento[0], elemento[0].id)}>
                                    Agregar a mi carrito
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>    
                :
                <p>Cargando</p>
            }
                
            
        </>
    );
}
 
export default Details;