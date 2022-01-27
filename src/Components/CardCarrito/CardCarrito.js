import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CardCarrito = (props) => {
    const { imagen, precio, nombre, id } = props
    const [cantidadChange, setCantidadChange] = useState('')
    const [cantidadDef, setCantidadDef] = useState('')
    const mensaje = () => {
        toast.success("Su compra ha sido realizada con éxito!", {
            position: "top-center",
            autoClose: 10000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    return ( 
        <>
         <div className="card" style={{ width: "18rem"}}>
                <div className="contenedorImagenCard">
                    <img src={imagen} className="imagenProducto" alt={nombre}/>
                </div>
                <div className="card-body">
                    <p className="card-text precio">${precio}</p>
                    <h5 className="card-title tituloProducto ">{nombre}</h5>
                </div>
                <form className="mb-3">
                        <label className="form-label">Cantidad</label>
                        <input min="0" required="required" type="number" className="form-control" onChange={(e) => setCantidadChange(e.target.value)} value={cantidadChange} onSubmit={(e) =>setCantidadDef(e.target.value)}/>
                        <button className="btn boton d-flex" type="submit" onClick={mensaje()}>Comprar</button>
                </form>
                    <p>Precio {cantidadChange*precio}</p>
                    <ToastContainer />
            </div>
        </>
     );
}
 
export default CardCarrito;