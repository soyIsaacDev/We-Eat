import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getPedidos } from '../../Actions/actions';
import NavBar from '../NavBar/NavBar';

import s from "./pedido.module.css"

export default function Pedido() {
    
    const idCliente = useSelector((state) =>state.loginState.id )
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(idCliente);
        setTimeout(() => {
            dispatch(getPedidos(idCliente));
        }, 100);
    }, [])
    const pedido = useSelector((state) => state.pedido);

    if(pedido){
        if(pedido.length > 0){
            return (
                <div>
                    <p></p>
                    <NavBar></NavBar>
                    <p></p>
                    <div className={s.estatuspedido}>Estatus de Pedido</div>
                    <p></p>
                    <div className={s.statuspedido}>Tu pedido se encuentra <b>{pedido[0].status}</b></div>
                </div>
            )
        }
        else{
            return <div>Sin Pedido Actual</div>
        }
    }
    else{
        return(<div>Loading</div>)
    }
    
}