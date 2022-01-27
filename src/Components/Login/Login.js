import './Login.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from 'react/cjs/react.development';
import { Context } from '../../store/storeContext';
import { useContext } from 'react';

const Login = () => {

    

    const { loginWithRedirect } = useAuth0();    

    return ( 
        <>  
            <button onClick={() => loginWithRedirect()} className="mt-1 miCuenta d-flex login-button" >
                <i class="bi bi-person-circle d-flex"></i>
                <p className="ms-2">Mi cuenta</p>
            </button>
        </>
     );
}
 
export default Login;