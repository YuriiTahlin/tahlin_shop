function Drawer({ onClose, items = [] }) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Кошик
          <img
            onClick={onClose}
            className="removeBtn"
            width="20px"
            height="20px"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem" key={obj.id}>
              <img width="65px" height="70px" src={obj.imageUrl} alt={obj.title} />
              <div>
                <p>{obj.title}</p>
                <b>{obj.price} грн</b>
              </div>
              <img
                className="removeBtn"
                width="25px"
                height="25px"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          ))}
        </div>

        <div className="cartItemsContainer">
          <div className="cartTotalBlock">
            <ul>
              <li className="finalPrice">
                <span>До сплати:</span>
                <div></div>
                <b>{totalPrice} грн</b>
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
