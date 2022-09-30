import { useEffect, useState } from "react";
import ListaForm from "./ListaForm";
import ListaLista from "./ListaLista";
import AzzeraLista from "./AzzeraLista";
import { getCookie, setCookie, deleteCookie } from "../hooks/manCookies";
import Footer from "./Footer";

export default function App(){
    
    //senza cookie
    //const [lista, setLista] = useState([]);
    
    //con cookie
    const [lista, setLista] = useState(getCookie('listatask') ? JSON.parse(getCookie('listatask')) : []);

    const checkAndPass = (task) => {
       let nuovalista = [...lista, task];
       setLista(nuovalista);
    }

    const cancellaUno = (id)=>{
        let pulito = [...lista];
        /* alert(pulito.splice(id, 1)+" cancellato con successo!"); */
        pulito.splice(id, 1);
        setLista(pulito);
    }

    const cancellaLista = ()=>{setLista([]);}

    useEffect(() => {
        setCookie('listatask', JSON.stringify(lista))
    }, [lista])

    return(
        <main>
            {/* <Header numeroItems={lista.length}/> */}            
            <ListaForm checkAndPass={checkAndPass}/>
            <ul>
                <ListaLista cancellaUno={cancellaUno} lista={lista}/>
            </ul>
            <AzzeraLista cancellaLista={cancellaLista} id="btn_azzeraLista"/>
            <Footer/>
        </main>
    );
}