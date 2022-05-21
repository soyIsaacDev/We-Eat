import React,{ useState,useEffect } from "react";
import { loginSession } from "../../Actions/APIMiddleware";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import { useDispatch, useSelector  } from "react-redux";

import { getLogginSession, setLoginSession } from "../../Actions/APIMiddleware";

//import style from "";

export default function SignIn(props) {
    const dispatch = useDispatch();
    
    const [input, setInput] = useState({ username: "", password:""});
    //const loginState = useSelector((state) => state.loginState.autenticated);
    
    const handleInputChange = function(e){
        setInput({ 
            ...input,  
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log("en Login Onsubmit --> " + JSON.stringify(input))
        dispatch(setLoginSession(input));
        //dispatch(getLogginSession(input));
    }
    const location = useLocation();
    console.log(location);
    
    return(
        <form onSubmit={onSubmit} /* className={style} */>
            <input
                name= 'username'
                value = {input.username}
                placeholder="Nombre de Usuario"
                onChange={(e) =>handleInputChange(e)}
                /* className= {style.nombreRest} */
            />
            <input
                name= 'password'
                value = {input.password}
                placeholder="Contraseña"
                onChange={(e) =>handleInputChange(e)}
                /* className= {style.nombreRest} */
                type= "password"
            />
            <input type="submit" /* className={style.submit} *//>
            
            {/* {loginState === "LoggedIn" ? (
                <Navigate to="/Restaurantes" ></Navigate>
                ): (
                <h2>Usuario o Contraseña Incorrecta</h2>
                )} */}

        </form>
    )
}