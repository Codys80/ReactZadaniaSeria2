import React, { useState } from "react"; 
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; 
 
const Zadanie2_9 = ({ onClick, state }) => { 
    const [liked, setLiked] = useState(state); 
 
    const toggleLike = () => { 
        setLiked(!liked); 
        if (onClick) { 
            onClick(); 
        } 

    }; 
    return ( 
        <div onClick={toggleLike} className={liked ? "enlarge" : ""}style={{ cursor: "pointer", fontSize: "24px", color: liked ? "red" : "black" , transition: ".5s"}}> 
            {liked ? <AiFillHeart /> : <AiOutlineHeart />} 
        </div> 
    ); 
}; 
 
export default Zadanie2_9;