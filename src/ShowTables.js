import React, { useState, useEffect } from 'react';
import "./ShowTable.css"
import axios from 'axios';
import Coin from './Coin';
import ReactPaginate from "react-paginate";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=&page=1&sparkline=false'
      )
      .then(response => {
        setCoins(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const usersPerPage = 7;

  const pageCount = Math.ceil(coins.length / usersPerPage);

  const pagesVisited = pageNumber * usersPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayCoin = filteredCoins
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map(coin => {
    return (
      <Coin
        key={coin.id}
        name={coin.name}
        price={coin.current_price}
        symbol={coin.symbol}
        marketcap={coin.total_volume}
        volume={coin.market_cap}
        image={coin.image}
      />
    );
  })

  return (
    <div className='app'>
      <div>
        <h1 className='text'>Crypto Details table</h1>
        <form>
          <input
            className='input'
            type='text'
            onChange={e => {
              setSearch(e.target.value);
            }}
            placeholder='Search by crypto name'
          />
        </form>
      </div>
      {displayCoin}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtn"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        />
    </div>
  );
}

export default App;