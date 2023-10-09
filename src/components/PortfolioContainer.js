import { useState } from "react";
import Stock from "./Stock";

function PortfolioContainer({ handleClick, portfolio }) {

  const portfolioItems = portfolio.map(stock => {
    return <Stock key={stock.id} stock={stock} handleClick={handleClick}/>
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioItems}
    </div>
  );
}

export default PortfolioContainer;
