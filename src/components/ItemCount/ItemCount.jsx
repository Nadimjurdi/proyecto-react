import React, { useState }  from "react";
import './ItemCount.css'

export const ItemCount =({stock, initial, onAdd})=>{

    const [counter,setCounter]= useState(0)  
    const sumar=()=>{
        if(counter<stock){
            setCounter(counter+1)
        }
    }
    const restar=()=>{
        if(counter>1){
        setCounter(counter-1)
    }
    }
    const reset=()=>{
        setCounter(counter-counter)
    }

    return(
        <>
        <h4>cantidad:{counter} </h4> 
        <div className="contadores">
            <button onClick={sumar} className="botones">➕</button>
            <button onClick={restar} className="botones">➖</button>
            <button onClick={reset} className="botones">❌</button>
            <button className="agregar botones" onClick={()=> onAdd(counter)} disabled={!stock}>Agregar al carrito</button>
        </div>   
        </>
    )
}