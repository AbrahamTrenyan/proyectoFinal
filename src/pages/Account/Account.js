import react from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./Account.css"


const Account = () => {

    const {user, isAuthenticated} = useAuth0();

    return ( 
        <>
            {isAuthenticated && (
                <div>
                    <b>Hola {user.name}!</b>
                </div>
                )
            }
        </>
     );
}
 
export default Account;