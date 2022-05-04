import React,{ useState,useEffect } from "react";
import { loginSession } from "../../Actions/postFunctions";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector  } from "react-redux";

import { getUser, getLoginSession } from "../../Actions/actions";
import { postLoginSession } from "../../Actions/postFunctions";

//import style from "";

export default function SignIn(props) {
    const dispatch = useDispatch();
    
    const [input, setInput] = useState({ username: "", password:""});
    const loginState = useSelector((state) => state.loginState);
    /* const [webpage, setWebpage] = useState("");
    useEffect(() => { 
        setWebpage(props.wp);
    }, []); */
    const handleInputChange = function(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        dispatch(loginSession(input));
        console.log("en Login Onsubmit --> " + JSON.stringify(input))
        //dispatch(getLoginSession())
        dispatch(postLoginSession(input));
    }

    

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

            {loginState.autenticated === "LogedIn" ? (
                <Navigate to="/Restaurantes" replace={true}></Navigate>
                ): (
                <h2>Usuario o Contraseña Incorrecta</h2>
                )}

        </form>
    )
}