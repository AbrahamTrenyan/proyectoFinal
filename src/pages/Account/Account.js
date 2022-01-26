import { Link } from "react-router-dom";
import "./Account.css"


const Account = () => {
    return ( 
        <div className="contenedorFormulario">
            <form className="formulario" >
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Ingrese su Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ejemplo@ejemplo.com"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div classNameName="d-flex">
                    <button type="submit" className="btn boton">Ingresar</button>
                    <Link  to="/" className="ms-3">¿No estás registrado? Registrate ahora gratis!!</Link>
                </div>
            </form>
        </div>
     );
}
 
export default Account;