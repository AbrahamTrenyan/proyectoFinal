import { Link } from "react-router-dom";
import "./Account.css"


const Account = () => {
    return ( 
        <div className="logIn">
            <i class="bi bi-door-open d-flex justify-content-center doorIcon"></i>
            <div className="contenedorFormulario ">
                <form className="formulario" >
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label fw-bold tituloEmail">Ingrese su Email</label>
                        <input type="email" className="form-control inputEmail" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ejemplo@ejemplo.com"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label fw-bold tituloContraseña">Contraseña</label>
                        <input type="password" className="form-control inputPassword" id="exampleInputPassword1"/>
                    </div>
                    <div classNameName="d-flex">
                        <button type="submit" className="btn boton">Ingresar</button>
                        <Link  to="/createaccount" className="ms-3 mensajeSignUp">¿No estás registrado? Registrate ahora gratis!!</Link>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Account;