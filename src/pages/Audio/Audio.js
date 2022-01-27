import { useContext, useEffect } from "react";
import { Context } from "../../store/storeContext";
import Card from "../../Components/Card";



const Audio = () => {
    const { productsList } = useContext(Context)
    let audio = productsList.filter(product => product.categoria==="audio")
    return ( 
    <>
        <div className="d-flex flex-wrap justify-content-around m-3">
            {audio.length > 0 ?
                audio.map(aud => (
                    <Card key={aud.id} {...aud} />
                ))
                :
                <p>No tenemos productos</p>
            }       
        </div>
        
    </> 
    );
}
 
export default Audio;