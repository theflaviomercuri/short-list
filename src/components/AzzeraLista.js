import "../css/AzzeraLista.css";
import ButtonGeneral from "./ButtonGeneral";

export default function AzzeraLista(props){

    return(
        <ButtonGeneral idBtn={props.id} onClick={props.cancellaLista}>cancella tutto</ButtonGeneral>
    );
}