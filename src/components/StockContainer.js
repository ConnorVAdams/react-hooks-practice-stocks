import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks }) {

  const stocksToDisplay = stocks.map(stock => {
    return <Stock key={stock.id} {...stock} />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay}
    </div>
  );
}

export default StockContainer;
