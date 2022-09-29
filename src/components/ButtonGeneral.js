export default function ButtonGeneral(props){

    if(props.onClick){    
        return(
            <button id={props.idBtn} value={props.value} type={props.type} onClick={()=>props.onClick(props.id)}>{props.children}</button>
        );
    }else{
        return(
            <button id={props.id} value={props.value} type={props.type}>{props.children}</button>
        )
    }
}