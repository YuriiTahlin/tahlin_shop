function Drawer(props) {
    return (
       <div className="overlay">
        <div className="drawer">
            <h2>
                Кошик <img onClick={props.onClose} className="removeBtn" width="20px" height="20px" src="/img/btn-remove.svg"
                           alt="Close"/>
            </h2>

            <div className="cartItemsContainer">
                <div className="cartItem">
                    <img width="65px" height="70px" src="/img/sneakers/1.png" alt="Sneakers"/>
                    <div>
                        <p>iPhone 13</p>
                        <b>20999 грн</b>
                    </div>
                    <img className="removeBtn" width="25px" height="25px" src="/img/btn-remove.svg"
                         alt="Remove"/>
                </div>

                <div className="cartItem">
                    <img width="65px" height="70px" src="/img/sneakers/1.png" alt="Sneakers"/>
                    <div>
                        <p>iPhone 13</p>
                        <b>20999 грн</b>
                    </div>
                    <img className="removeBtn" width="25px" height="25px" src="/img/btn-remove.svg"
                         alt="Remove"/>
                </div>

                <div className="cartItem">
                    <img width="65px" height="70px" src="/img/sneakers/1.png" alt="Sneakers"/>
                    <div>
                        <p>iPhone 13</p>
                        <b>20999 грн</b>
                    </div>
                    <img className="removeBtn" width="25px" height="25px" src="/img/btn-remove.svg"
                         alt="Remove"/>
                </div>
            </div>

            <div className="items">
                <div className="cartTotalBlock">
                    <ul>
                        <li className="finalPrice">
                            <span>До сплати:</span>
                            <div></div>
                            <b>20999 грн</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформити замовлення</button>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Drawer;
