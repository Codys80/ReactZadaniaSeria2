import React from "react"; 
import { useState, useEffect } from "react";

const Zadanie2_5 = () => {
    const [kolor, setKolor] = useState(`rgb(0, 0, 0)`);
    const [size, setSize]  = useState("");
    let r, g, b = 0;
    r = Math.random() * 256;
    g = Math.random() * 256;
    b = Math.random() * 256;
    function reset(){
        setSize(`${16}`+'px')
        setKolor(`rgb(${0}, ${0}, ${0})`)
    }
    return ( 
        <>
            <button onClick={() => setKolor(`rgb(${r}, ${g}, ${b})`)}>Zmień Kolor</button> <br/>
            <button onClick={() => reset()}>Domyślne</button> <br/>
            <input type="range" id='selector' name="selector" min = '17' max = '100'  onChange={() => setSize(`${selector.value}`+'px')}/>
            <div style={{ backgroundColor: kolor, padding: "10px", border: "1px solid black", fontSize: size}}> 
                Przykładowy komponent ze stylami inline
            </div> 

        </>
    ); 
}; 
 
export default Zadanie2_5; 