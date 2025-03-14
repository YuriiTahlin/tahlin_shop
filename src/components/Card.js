import App from "../App";

function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <div className="favorite" onClick={props.onFavorite}>
                <img src="/img/react-unliked.svg" alt="Unliked"/>
            </div>
            <img width="150" height="170" src={props.imageUrl} alt="Product"/>
            <h5>{props.title}</h5>
            <div className="price">
                <span>Ціна:</span>
                <b>{props.price}</b>
                <div className="button" onClick={props.onPlus}>
                    <img className="addButton" src="/img/icon.svg" alt="Icon" width="25" height="25"/>
                </div>
            </div>
        </div>
    )
}
export default Card;