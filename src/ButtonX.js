export default function ButtonX({onClick, id}){

    return(
        <button onClick={()=>onClick(id)}>x</button>
    );

}