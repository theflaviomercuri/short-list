import { useEffect, useState } from "react";
import ListaForm from "./ListaForm";
import ListaLista from "./ListaLista";
import AzzeraLista from "./AzzeraLista";
import { getCookie, setCookie, deleteCookie } from "./manCookies";

export default function NotToDo(){
    
    //senza cookie
    //const [lista, setLista] = useState([]);
    //con cookie
    const [lista, setLista] = useState(getCookie('listatask') ? JSON.parse(getCookie('listatask')) : []);

    const checkAndPass = (task) => {
       let nuovalista = [...lista, task];
       setLista(nuovalista)
    }

    const cancellaUno = (id)=>{
        let pulito = [...lista];
        alert(pulito.splice(id, 1)+" cancellato con successo!");
        setLista(pulito);
    }

    const cancellaLista = ()=>{setLista([]);}

    useEffect(() => {
        setCookie('listatask', JSON.stringify(lista))
    }, [lista])

    return(
        <div>
            <h1>To Do List [file unico risistemato in Componenti] <span>({lista.length})</span></h1>
            <ListaForm checkAndPass={checkAndPass}/>
            <AzzeraLista cancellaLista={cancellaLista}/>
            <ul>
                <ListaLista cancellaUno={cancellaUno} lista={lista}/>
            </ul>
        </div>
    );
}