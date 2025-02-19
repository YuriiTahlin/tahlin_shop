import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    return (
        <div className="wrapper">
        <Drawer/>
        <Header/>
            <div className="content">
                <div className="search-block">
                    <h1>Всі моделі iPhone</h1>
                    <div className="search">
                        <img src="/img/search.svg" alt="Search" width="11" height="11" />
                        <input placeholder="Пошук" />
                    </div>
                </div>

                <div className="sneakers">
                    <Card />
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
                                <img className="addButton" src="/img/icon.svg" alt="Icon" width="25" height="25"/>
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
                                <img className="addButton" src="/img/icon.svg" alt="Icon" width="25" height="25"/>
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
                                <img className="addButton" src="/img/icon.svg" alt="Icon" width="25" height="25"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
