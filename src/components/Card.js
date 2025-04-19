import React from 'react';

function Card({ title, imageUrl, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});  // викликає onPlus
    setIsAdded(!isAdded);  // змінює стан
  };

  return (
    <div className="card">
      <div className="favorite" onClick={onFavorite}>
        <img src="/img/react-unliked.svg" alt="Unliked" />
      </div>
      <img width="150" height="170" src={imageUrl} alt="Product" />
      <h5>{title}</h5>
      <div className="price">
        <span>Ціна:</span>
        <b>{price}</b>
        <div className="button" onClick={onClickPlus}>
          <img className="addButton" src="/img/icon.svg" alt="Icon" width="25" height="25" />
        </div>
      </div>
    </div>
  );
}

export default Card;
