import ListItem from './listitem.jsx'
function wyswietl(){
    return(
        <>{props.header == null  ? <h3>brak danych</h3> : <h1>{props.header}</h1>}                
        <ul> 
                {props.items.map((item, index) => ( 
                    <li key={index}><ListItem items = {item}/></li> 
                ))} 
            </ul>
        </>
        );
}
function List(props){
    return ( 
        <>
            {props.items == null  ? <h3>brak danych</h3> : wyswietl()}
        </>
    ); 
}
export default List