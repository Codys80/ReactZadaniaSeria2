import React from "react"; 
import styles from "./Zadanie2_8.module.css"; 
const Zadanie2_8 = ({ text, type, alertNote }) => {  
        function wyswietl(){
            alert(alertNote);
        }
        const buttonClass = `${styles.btn} ${styles[`btn-${type}`]}`;
            return <button className={buttonClass} onClick={() => wyswietl()}>{text}</button>; 
    };  

 
export default Zadanie2_8; 