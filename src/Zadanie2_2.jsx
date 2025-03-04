import './Zadanie2_2.css'
import { useState } from 'react';

function Zadanie2_2(props){
    const [selectedIndex, setSelectedIndex] = useState(-1); 
        function handleClick(index){
            setSelectedIndex(index);
            selectedIndex === index ? setSelectedIndex(100) : index;
        } 
        return ( 
            <ul className={"ul-2_2"}> 
                {props.items.map((item, index) => ( 
                    <li key={index} className={selectedIndex === index ? "active" : ""} 
                    onClick={(event) =>handleClick(index)} >{item}</li>     
            ))} 
                </ul> 

        ); 
    }; 
export default Zadanie2_2