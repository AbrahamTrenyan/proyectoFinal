import { useContext, useEffect } from "react";
import { Context } from "../../store/storeContext";
import Card from "../../Components/Card";


const Smartwatches = () => {
    const { productsList } = useContext(Context)
    let smartwatch = productsList.filter(product => product.categoria==="smartwatch")
    return ( 
    <>
        <div className="d-flex flex-wrap justify-content-around m-3">
            {smartwatch.length > 0 ?
                smartwatch.map(smart => (
                    <Card key={smart.id} {...smart} />
                ))
                :
                <p>No tenemos productos</p>
            }       
        </div>
        
    </> 
    );
}
 
export default Smartwatches;