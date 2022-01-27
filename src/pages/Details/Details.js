import { useParams } from "react-router-dom";
import "./Details.css"
import ProductDetail from "../../Components/ProductDetail";



const Details = () => {
    const{id} = useParams()
    let productoUnitario = productoUnitario.filter(unidad => unidad.id ===unidad.id)
    return (    
        <>  
             <div className="d-flex flex-wrap justify-content-around m-3">
               
                    {productoUnitario.map(product => (
                        <ProductDetail key={product.id} {...product} />
                     ))
                    }
           
        </div>
            
        </>
    );
}
 
export default Details;