function Zadanie2_4(props){
    function wyswietl(){
        return(
            <>{props.header == null  ? <h3>brak danych</h3> : <h1>{props.header}</h1>}                
            <ul> 
                    {props.items.map((item, index) => ( 
                        <li key={index}>{item}</li> 
                    ))} 
                </ul>
            </>
            );
    }

    return ( 
        <>
            {props.items == null  ? <h3>brak danych</h3> : wyswietl(props.items)}
        </>
    ); 
}
export default Zadanie2_4