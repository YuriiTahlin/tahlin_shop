function Header() {
    return (
        <header>
        <div className="headerLeft">
            <img src="/img/logo.png" alt="Logo" width="175" height="150"/>
            <div className="headerInfo">
                <h3>Tahlin Shop</h3>
                <p>Магазин техніки Apple</p>
            </div>
        </div>
        <ul className="headerRight">
            <li>
                <img src="/img/cart.svg" alt="Cart" width="18" height="18"/>
                <span>20999 грн</span>
            </li>
            <li>
                <img src="/img/user.svg" alt="User" width="18" height="18"/>
            </li>
        </ul>
    </header>)
}

export default Header;