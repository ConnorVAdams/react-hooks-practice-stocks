import { useEffect } from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleClick, sort, filter }) {
  
  const stocksToDisplay = stocks
  .filter(stock => filter === 'All' ? stock.type : stock.type === filter)
  .sort((a, b) => {
    if (sort === 'Alphabetically') {
      const stock1 = a.name
      const stock2 = b.name
      if (stock1 < stock2) {
        return -1
      } else {
        return 1
      }
    } else {
      const stock1 = a.price
      const stock2 = b.price
      if (stock1 < stock2) {
        return -1
      } else {
        return 1
      }
    }
  })
  .map(stock => {
    return <Stock key={stock.id} stock={stock} handleClick={handleClick} />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay}
    </div>
  );
}

export default StockContainer;
