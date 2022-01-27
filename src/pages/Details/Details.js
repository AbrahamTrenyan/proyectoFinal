import { useParams } from "react-router-dom";
// import "./Details.css"
// import ProductDetail from "../../Components/ProductDetail";

import { useState } from "react";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";



const Details = () => {
    // const[detalleProducto, setDetalleProducto] = useState({})
    const{id} = useParams()

    // const getDetalleProducto = (id) =>{
    //     setDetalleProducto(id)
    // }
    // let productoUnitario = productoUnitario.filter(unidad => unidad.id ===unidad.id)
    return (    
        <>  
             <ProductDetail  id={id}/>
            
        </>
    );
}
 
export default Details;