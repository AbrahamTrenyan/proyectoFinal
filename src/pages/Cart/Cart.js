import { useContext } from "react";
import { Context } from "../../store/storeContext";
import CardCarrito from "../../Components/CardCarrito";
const Cart = () => {
    const {carrito, setCarrito} = useContext(Context)
    return (  
        <div className="d-flex flex-wrap justify-content-around m-3">
            {carrito.length > 0 ?
                carrito.map(prod => (
                    <CardCarrito key={prod.id} {...prod} />
                ))
                :
                <p>No se encontraron productos en su carrito.</p>
            }       
        </div>
     );
}
 
export default Cart;