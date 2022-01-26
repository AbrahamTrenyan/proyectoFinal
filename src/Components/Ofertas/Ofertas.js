import { useContext, useEffect } from "react";
import { Context } from "../../store/storeContext";
import Card from "../Card";
const Ofertas = () => {
    const { productsList } = useContext(Context)
    let enOferta = productsList.filter(product => product.oferta === true)
    return (
        <div className="d-flex flex-wrap justify-content-around m-3">
            {enOferta.length > 0 ?
                enOferta.map(off => (
                    <Card key={off.id} {...off} />
                ))
                :
                <p>No tenemos productos</p>
            }       
        </div>
        
    );
}
export default Ofertas;