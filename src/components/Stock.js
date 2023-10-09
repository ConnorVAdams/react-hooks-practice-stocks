import React from "react";

function Stock({ stock, handleClick }) {

  const onClick = () => {
    handleClick(stock)
  }

  return (
    <div>
      <div onClick={onClick} className="card">
        <div id={stock.id} className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
