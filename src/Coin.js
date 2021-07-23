import React from 'react';
import './Coin.css';
import Watchlist from './Watchlist';

const handleclick = {
}
const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  image,
}) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='symbol'>{symbol}</p>
        </div>
        <div className='data'>
          <p className='current-price'>Rs {price}</p>

          <p className='total-marketcap'>
            Market Cap: Rs {marketcap.toLocaleString()}
          </p>
          <div onClick = {handleclick}>
          <Watchlist/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;