import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
    { title: "iPhone 13", price: 20999, imageUrl: "/img/sneakers/1.png" },
    { title: "iPhone 14", price: 24999, imageUrl: "/img/sneakers/2.png"},
    { title: "iPhone 15", price: 29999, imageUrl: "/img/sneakers/3.png"},
    { title: "iPhone 16", price: 39999, imageUrl: "/img/sneakers/4.png"}
];

function App() {
    const [cartOpened, setCartOpened] = React.useState(false);
    return (
        <div className="wrapper">
            {cartOpened && <Drawer onClose={()=> setCartOpened(false)}/>}
        <Header onClickCart={() => setCartOpened(true)} />
            <div className="content">
                <div className="search-block">
                    <h1>Всі моделі iPhone</h1>
                    <div className="search">
                        <img src="/img/search.svg" alt="Search" width="11" height="11"/>
                        <input placeholder="Пошук"/>
                    </div>
                </div>

                <div className="sneakers">
                    {arr.map((obj) => (
                    <Card
                        title={obj.title}
                        price={obj.price}
                        imageUrl={obj.imageUrl}
                        onFavorite={() => console.log('Додано в закладки')}
                        onPlus={() => console.log('Натиснули плюс')}
                    />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
