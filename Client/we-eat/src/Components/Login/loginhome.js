import React, { useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";

import { getUser } from "../../Actions/actions";

//import style from "";

export default function LoginHome() {

    const user = useSelector((state) => state.loadedUser)
    
    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(getUser(UserId));
    }, []);

    return(
        <div>
            <h1>Bienvenido</h1>
        </div>
    )
}