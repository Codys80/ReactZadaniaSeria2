import React, { useState } from "react"; 
import { FaSun, FaMoon } from "react-icons/fa"; 
 
const Zadanie2_7b = () => { 
    const [isDay, setIsDay] = useState(true); 
 
    return ( 
        <div> 
            {isDay ? <FaSun size={40} color="gold" /> : <FaMoon size={40} color="gray" />} 
            <button onClick={() => setIsDay(!isDay)}>Zmień ikonę</button> 
        </div> 
    ); 
}; 

export default Zadanie2_7b;