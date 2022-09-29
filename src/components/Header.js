export default function Header({numeroItems}){

    return(
        <div>
            <h2>Short-list</h2>
            <div>Cose ancora da fare: <span>{numeroItems}</span></div>
        </div>
        );
}