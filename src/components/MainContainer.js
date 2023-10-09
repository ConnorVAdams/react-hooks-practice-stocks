import { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [sort, setsort] = useState({
    sort: '',
    filter: 'All'
  })

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(resp => resp.json())
    .then(fetchedStocks => setStocks(fetchedStocks))
  })

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
