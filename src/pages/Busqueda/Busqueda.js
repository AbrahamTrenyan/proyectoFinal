import { useContext} from "react";
import { Context } from "../../store/storeContext";
import Card from '../../Components/Card'
import { useEffect } from "react";
const Busqueda = () => {
    const { buscados, busqueda, setBuscados, productsList } = useContext(Context)
    useEffect(() => {setBuscados(productsList.filter((prod)=>prod.nombre.toLowerCase().includes(busqueda.toLowerCase()))
        )}, [busqueda])
    return ( 
    <>
        <div className="d-flex flex-wrap justify-content-around m-3">
            {buscados.length > 0 ?
                buscados.map(prod => (
                    <Card key={prod.id} {...prod} />
                ))
                :
                <p>No se encontraron productos con ese nombre</p>
            }       
        </div>
        
    </> 
     );
}
 
export default Busqueda;