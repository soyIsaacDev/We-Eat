import React,{ useState } from "react";
import { login } from "../../Actions/postFunctions";

//import style from "";

export default function Login() {

    const [input, setInput] = useState({ username: "", password:""});

    const handleInputChange = function(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        login(input);
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
        </form>
    )
}