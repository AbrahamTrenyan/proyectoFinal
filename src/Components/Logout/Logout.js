import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {

    const { logout } = useAuth0();

    return ( 
        <>
            <button onClick={() => logout({ returnTo: window.location.origin})} className="mt-1 miCuenta d-flex login-button" >
                <i class="bi bi-person-circle d-flex"></i>
                <p className="ms-2">Cerrar sesion</p>
            </button>
        </>
     );
}
 
export default Logout;