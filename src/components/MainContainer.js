import { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sort, setsort] = useState({
    sort: '',
    filter: 'All'
  })

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(resp => resp.json())
    .then(fetchedStocks => setStocks(fetchedStocks))
  })

  const handleAdd = (addedStock) => {
    
    if (portfolio.find(stock => stock.id === addedStock.id)) {
      console.log('Already owned')
    } else {
      const currentPortfolio = [...portfolio, addedStock]
      setPortfolio(currentPortfolio)
    }
  }

  const handleDelete = ({ id }) => {
    const newPortfolio = portfolio.filter(stock => stock.id !== id)
    setPortfolio(newPortfolio)  
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer handleClick={handleAdd} stocks={stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer handleClick={handleDelete} portfolio={portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
