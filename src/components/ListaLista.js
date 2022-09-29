import ButtonGeneral from "./ButtonGeneral";
import "../css/ListaLista.css";

export default function ListaLista({lista, cancellaUno}){
    return(
        <>
        {lista.map((elem, i) => ( 
            <li key={i}><ButtonGeneral onClick={cancellaUno} id={i}>x</ButtonGeneral><span>{elem}</span></li>
        ))}
        </>
    );
}