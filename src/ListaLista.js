import ButtonX from "./ButtonX";

export default function ListaLista({lista, cancellaUno}){
    return(
        <>
        {lista.map((elem, i) => (
            
            <li key={i}> {elem} <ButtonX onClick={cancellaUno} id={i}/></li>

        ))}
        </>
    );
}