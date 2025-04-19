import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    const [items,setItems] = React.useState([])
    const [cartItems,setCartItems] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
  fetch('https://6803835b0a99cb7408ec34a4.mockapi.io/items')
    .then(res => res.json())
    .then(json => setItems(json));
}, []);

    const onAddToCart = (obj) => {
        setCartItems([...cartItems, obj]);
    }


    return (
        <div className="wrapper">
            {cartOpened && <Drawer items={cartItems} onClose={()=> setCartOpened(false)}/>}
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
                    {items.map((obj) => (
                    <Card
                        title={obj.title}
                        price={obj.price}
                        imageUrl={obj.imageUrl}
                        onFavorite={() => console.log('Додано в закладки')}
                        onPlus={(obj) => onAddToCart(obj)}
                    />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
