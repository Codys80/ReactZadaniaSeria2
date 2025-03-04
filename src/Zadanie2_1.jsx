import React from "react"; 
import { useState } from "react";
function Zadanie2_1(props) { 
    //const items = ["Jabłko", "Banan", "Gruszka"]; 
    const [selectedIndex, setSelectedIndex] = useState(-1); 
    function handleClick(index){
        setSelectedIndex(index);
        selectedIndex === index ? setSelectedIndex(100) : index;
    } 
    let a = props.backgroundColor;
    let items = props.items;
    return ( 
        <ul className="list-group"> 
            {items.map((item, index) => ( 
                <li 
                    key={index}
                    style={{color: `${a}`}} // {selectedIndex === index ?  : ""}  
                    className={selectedIndex === index ? "active" : ""} 
                    onClick={(event) =>handleClick(index)} 
                > 
                    {item} 
                </li> 
            ))} 
        </ul> 
    ); 
    // return ( 
    //     <ul className="list-group"> 
    //         {items.map((item, index) => ( 
    //             <li key={index} className="list-group-item">{item}</li> 
    //         ))} 
    //     </ul> 
        
    // ); 
}; 
 
export default Zadanie2_1; 