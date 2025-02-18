function App() {
    return (
        <div className="wrapper">
            <div style={{display: "none"}} className="overlay">
                <div className="drawer">
                    <h2>
                        Кошик <img className="removeBtn" width="20px" height="20px" src="/img/btn-remove.svg"
                                   alt="Remove"/>
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

            <header>
                <div className="headerLeft">
                    <img src="/img/logo.png" alt="Logo" width="175" height="150" />
                    <div className="headerInfo">
                        <h3>Tahlin Shop</h3>
                        <p>Магазин техніки Apple</p>
                    </div>
                </div>
                <ul className="headerRight">
                    <li>
                        <img src="/img/cart.svg" alt="Cart" width="18" height="18" />
                        <span>20999 грн</span>
                    </li>
                    <li>
                        <img src="/img/user.svg" alt="User" width="18" height="18" />
                    </li>
                </ul>
            </header>

            <div className="content">
                <div className="search-block">
                    <h1>Всі моделі iPhone</h1>
                    <div className="search">
                        <img src="/img/search.svg" alt="Search" width="11" height="11" />
                        <input placeholder="Пошук" />
                    </div>
                </div>

                <div className="sneakers">
                    <div className="card">
                        <div className="favorite">
                            <img src="/img/react-unliked.svg" alt="Unliked" />
                        </div>
                        <img width="150" height="170" src="/img/sneakers/1.png" alt="Product" />
                        <h5>iPhone 13</h5>
                        <div className="price">
                            <span>Ціна:</span>
                            <b>20999 грн</b>
                            <div className="button">
                                <img src="/img/icon.svg" alt="Icon" width="25" height="25" />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="favorite">
                            <img src="/img/react-unliked.svg" alt="Unliked" />
                        </div>
                        <img width="150" height="170" src="/img/sneakers/2.png" alt="Product" />
                        <h5>iPhone 14</h5>
                        <div className="price">
                            <span>Ціна:</span>
                            <b>24999 грн</b>
                            <div className="button">
                                <img src="/img/icon.svg" alt="Icon" width="25" height="25" />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="favorite">
                            <img src="/img/react-unliked.svg" alt="Unliked" />
                        </div>
                        <img width="150" height="170" src="/img/sneakers/3.png" alt="Product" />
                        <h5>iPhone 15</h5>
                        <div className="price">
                            <span>Ціна:</span>
                            <b>33999 грн</b>
                            <div className="button">
                                <img src="/img/icon.svg" alt="Icon" width="25" height="25" />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="favorite">
                            <img src="/img/react-unliked.svg" alt="Unliked" />
                        </div>
                        <img width="150" height="170" src="/img/sneakers/4.png" alt="Product" />
                        <h5>iPhone 16</h5>
                        <div className="price">
                            <span>Ціна:</span>
                            <b>42999 грн</b>
                            <div className="button">
                                <img src="/img/icon.svg" alt="Icon" width="25" height="25" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
