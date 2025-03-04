import React from "react"; 
import styled from "styled-components"; 
import { useState } from "react";
function Zadanie2_3(props){ 
    const [active, setActive] = useState(false); 
    const List = styled.ul` 
    list-style: none; 
    padding: 0; 
    margin: 0; 
    `; 
    const ListItem = styled.li` 
    padding: 10px; 
    border-bottom: 1x solid #ddd; 
    cursor: pointer; 
    background-color: ${(active ? "blue" : "white")}; 
    color: ${(active ? "white" : "black")}; 
    &:hover { 
        background-color: #f0f0f0; 
        } 
        `; 
        const [selectedIndex, setSelectedIndex] = useState(-1); 
        function handleClick(index){
            setSelectedIndex(index);
            selectedIndex === index ? setActive(!active) : index;
    }
    return ( 
        <List> 
        {props.items.map((item, index) => (
            
            <ListItem key={index} 
            //onClick={()=>setActive(!active)}
            //className={selectedIndex === index ? "active" : ""} 
            onClick={(event) =>handleClick(index)}
            > {item} </ListItem> 
        ))} 
    </List> 
); 
}; 




export default Zadanie2_3; 