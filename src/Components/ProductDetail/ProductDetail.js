// import "./ProductDetail.css"
// import { useContext, useEffect, useState } from "react";
// import { Context } from "../../store/storeContext";

// const ProductDetail = (props) => {
//     const{imagen, otraImagen, nombre, descripcion, precio, id} = props
//     const { productsList } = useContext(Context)
//     // const [productoDetallado, setProductoDetallado] = useState({})
//     let detalles = productsList.filter(product => product.id===id)

//     return ( 
//         <>
//         {/* {detalles.length > 0 ?
//             detalles.map(detalle =>( */}
//             <div key={id} className="card mb-3 cardGeneral ms-2 me-2 mt-4" style={{maxwidth: "540px"}}>
//                 <div className="row g-0">
//                     <div className="col-md-4">

//                     <div className="container Details">
//                         <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
//                             <div className="carousel-inner">
//                                 <div className="carousel-item active">
//                                     <img src={imagen} className="d-block img " alt={nombre}/>
//                                 </div>
//                                 <div className="carousel-item">
//                                     <img src={otraImagen} className="d-block img " alt={nombre}/>
//                                 </div>
//                             </div>
//                             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//                                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                                 <span className="visually-hidden">Previous</span>
//                             </button>
//                             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//                                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                                 <span className="visually-hidden">Next</span>
//                             </button>
//                         </div>   
//                         </div>
//                             {/* /////////////////// */}
//                     </div>
//                     <div className="col-md-8">
//                         <div className="card-body">
//                             <h5 className="card-title text-center nombreProducto">{nombre}</h5>
//                             <p className="card-text text-center mt-5">{descripcion}</p>
//                             <div className="d-flex justify-content-evenly">
//                             <p className="card-text precio fw-bold text-center">${precio}</p>
                        
//                                 <button className="botonAgregar fw-bold ">Agregar a mi carrito</button>
//                             </div>
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
             
//             {/* )) */}
//             {/* :
//             <p>hola</p>
//             } */}
    
// </>


//      );
// }
 
// export default ProductDetail;