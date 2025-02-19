import App from "../App";

function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/react-unliked.svg" alt="Unliked"/>
            </div>
            <img width="150" height="170" src="/img/sneakers/1.png" alt="Product"/>
            <h5>iPhone 13</h5>
            <div className="price">
                <span>Ціна:</span>
                <b>20999 грн</b>
                <div className="button">
                    <img className="addButton" src="/img/icon.svg" alt="Icon" width="25" height="25"/>
                </div>
            </div>
        </div>
    )
}
export default Card;