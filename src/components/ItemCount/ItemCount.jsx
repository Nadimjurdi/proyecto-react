import React, { useState }  from "react";
import './ItemCount.css'

export const ItemCount =()=>{

    const [counter,setCounter]= useState(0)
    const sumar=()=>{
        setCounter(counter+1)
    }
    const restar=()=>{
        if(counter>0){
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
        </div>   
        </>
    )
}