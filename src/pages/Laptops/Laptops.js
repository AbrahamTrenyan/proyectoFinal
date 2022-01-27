import { useContext, useEffect } from "react";
import { Context } from "../../store/storeContext";
import Card from "../../Components/Card";


const Laptops = () => {
    const { productsList } = useContext(Context)
    let laptops = productsList.filter(product => product.categoria==="laptops")
    return ( 
    <>
        <div className="d-flex flex-wrap justify-content-around m-3">
            {laptops.length > 0 ?
                laptops.map(lap => (
                    <Card key={lap.id} {...lap} />
                ))
                :
                <p>No tenemos productos</p>
            }       
        </div>
        
    </> 
    );
}
 
export default Laptops;