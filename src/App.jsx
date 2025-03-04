import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './list.jsx'
import Zadanie2_1 from './Zadanie2_1'
import Zadanie2_2 from './Zadanie2_2'
import Zadanie2_3 from './Zadanie2_3'
import Zadanie2_4 from './Zadanie2_4.jsx'
import Zadanie2_5 from './Zadanie2_5.jsx'
import Zadanie2_6 from './Zadanie2_6.jsx'
import Zadanie2_7a from './Zadanie2_7a.jsx'
import Zadanie2_7b from './Zadanie2_7b.jsx'
import Zadanie2_8 from './Zadanie2_8.jsx'
import Zadanie2_9 from './Zadanie2_9.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container"> 
        <h1>Lista elementów</h1> 
        <Zadanie2_1 items={["Jabłko", "Banan", "Gruszka"]} backgroundColor="lightblue"/> 
        <br/><h1>Zadanie 2</h1>
        <Zadanie2_2 items={["Jabłko", "Banan", "Gruszka"]}/>
        <br/><h1>Zadanie 3</h1>
        <Zadanie2_3 items={["Jabłko", "Banan", "Gruszka"]} />
        <br/><h1>Zadanie 4</h1>
        <Zadanie2_4 items={["Jabłko", "Banan", "Gruszka"]} header = "nagłówek"/>
        {/* <Zadanie2_4/> */}
        <List/>
        <br/><h1>Zadanie 5</h1>
        <Zadanie2_5/>
        <br/><h1>Zadanie 6</h1>
        <Zadanie2_6/>  
        </div> 
        <br/><h1>Zadanie 7</h1>
        <Zadanie2_7a/>
        <Zadanie2_7b/>
        <br/><h1>Zadanie 8 </h1>
        <Zadanie2_8 text="Zapisz" type="primary"  alertNote="Zapisano"/>
        <Zadanie2_8 text="Usuń" type="danger"  alertNote="Usunięto"/>
        <Zadanie2_8 text="Fajne" type="succes" alertNote="Fajniej" />
        <br/><h1>Zadanie 9</h1>
        <Zadanie2_9 onClick={() => console.log("Kliknięto w serce!")} state={true} />
    </>
  )
}

export default App
