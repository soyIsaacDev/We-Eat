import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { loginEstado} from "../../Actions/actions";
import RestaurantDetails from "../RestDetails/r-detail";
import { NavLink } from "react-router-dom";


const LogInButtons = () => {
    const dispatch = useDispatch();
    
    const loginState = useSelector((state) => state.loginState);
    const navigate = useNavigate(); // navigates users programmatically
    const location = useLocation(); // access to Location Hook (we attached Navigate state to location in ProtectedRoutes)
            // Its based in window.location and represents "where the user is at"
            // Its mostly an object representation of the URL
            // Location State is set in "ProtectedRoutes" in Navigate component
    
    return(
        <div>
            <h2>{`Logged In: ${loginState}`}</h2>
            <button
                onClick={() => {
                    if (loginState=== true) return
                    dispatch(loginEstado());
                    
                    if (location.state?.from) {
                        navigate(location.state.from);
                    }
                }}>
                Log In
            </button>
            <button
                onClick={() => {
                    if (!loginState) return;
                    dispatch(loginEstado());
                }}>
                Log Out
            </button>
            <NavLink to = "/restaurantDetails/1">Detalles de restaurant</NavLink>
            

        </div>
    )
};

export default LogInButtons;