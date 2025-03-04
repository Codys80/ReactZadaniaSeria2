import "bootstrap/dist/css/bootstrap.min.css"; 
import React from "react"; 

 
const Zadanie2_6 = () => { 
let correctLogin = "admin";
let correctPassword = "admin";
let count = 0;
function validate(){
    count++;
    if (count>5){document.getElementById("Welcome").innerHTML = 'Zbyt wiele nie udanych prób'; return(0);}
    if (login.value == null || login.value == "") {document.getElementById("Welcome").innerHTML = 'Puste pole loginu';return(0);};
    if (password.value == null || password.value == "") {document.getElementById("Welcome").innerHTML = 'Puste pole hasła'; return(0);};
    //if (login.value != correctLogin && password.value != correctPassword) {document.getElementById("Welcome").innerHTML = 'Puste pole hasła'};
    if (login.value == correctLogin && password.value == correctPassword){ document.getElementById("Welcome").innerHTML = 'Witamy'; count = 0;}
    if (login.value == correctLogin && password.value != correctPassword) {document.getElementById("Welcome").innerHTML = 'Błędne hasło'};
    if (login.value != correctLogin && password.value == correctPassword) {document.getElementById("Welcome").innerHTML = 'Błędne login'};
    if (login.value != correctLogin && password.value != correctPassword) {document.getElementById("Welcome").innerHTML = 'Błędne dane'};
}
    return (<>
        <div className="form-control">
                <label>Login: </label> <input type= "text" name = "login" id = "login"/><br/>
                <label>Hasło: </label> <input type= "password" name = "password" id = "password"/><br/>
            <button className="btn btn-primary" onClick={() => validate()}>Kliknij mnie</button> <br/>
            <p id = "Welcome" name = "Welcome"></p>
        </div> 
        <div className="p-2 m-2 bg-blue-500 text-black rounded-lg text-center"> 
            <ol>
                <li>Unifix20</li>
                <li>Xarudas0030</li>
                <li></li>
            </ol>
        </div> 
        </> 
    ); 
};

export default Zadanie2_6