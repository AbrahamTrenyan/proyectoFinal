import { Link } from "react-router-dom";
import "./CreateAccount.css"

const CreateAccount = () => {
    return ( 
        <div>
            <i class="bi bi-box-arrow-in-right d-flex justify-content-center signUpIcon"></i>
            <div className="contenedorSingUp ">
                <form className="formulario" >
                    <h1 className="text-center fw-bold titulo">CREATE UNA CUENTA AQUÍ, ES GRATIS!!</h1>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label text-light">Nombre de usuario</label>
                        <input type="text" className="form-control inputUser" id="exampleInputUser1" placeholder="Ej: julian123" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label text-light">Ingrese su Email</label>
                        <input type="email" className="form-control inputEmail" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ejemplo@ejemplo.com"/>
                    </div>
                    
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label text-light">Elija una contraseña</label>
                        <input type="password" className="form-control inputPassword" id="exampleInputPassword1"/>
                    </div>
                    <div classNameName="d-flex">
                        <button type="submit" className="btn boton">Ingresar</button>
                        <Link  to="/account" className="ms-3 mensajeLogIn">¿Contás con una cuenta? Inicia sesión aquí!</Link>
                    </div>
                </form>
            </div>
        </div>


     );
}
 
export default CreateAccount;