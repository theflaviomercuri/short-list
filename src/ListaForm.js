import React, { useRef, useState } from "react";

export default function ListaForm({checkAndPass}){
    
    const searchInput = useRef(null);
    const [task, setTask] = useState("");

    const handleNameChange = (e) =>{
        setTask(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(task!=="") {checkAndPass(task);}
        setTask("");
        searchInput.current.focus()
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Inserisci nuovo task:</label>
            <input ref={searchInput} value={task} type="text" id="task" placeholder="Inserisci un nuovo task..." onChange={handleNameChange}/>
            <button type="submit" value="submit">Aggiungi</button>
        </form>
    );
}