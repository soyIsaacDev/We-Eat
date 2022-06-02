import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getPedidos } from '../../Actions/actions';
import NavBar from '../NavBar/NavBar';

export default function Pedido() {
    const pedido = useSelector((state) => state.pedido);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPedidos(pedido[0].id))
    }, [])
    
    return(
        <div>
            <p></p>
            <NavBar></NavBar>
            <p></p>
            <h2>Estatus de Pedido</h2>
            
            <p></p>
            <p></p>
            <div>Tu pedido se encuentra <b>{pedido[0].status}</b></div>
        </div>
    )
}