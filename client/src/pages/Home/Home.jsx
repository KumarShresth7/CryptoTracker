import React, { useContext } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'

const Home = () => {
  
  const{allCoin,currency} = useContext(CoinContext)

  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br/> Crypto Marketplace</h1>
        <p>Welcome the world's largest cryptocurrency marketplace.Sign in to explore more</p>
        <form>
          <input type='text' placeholder='Search crypto...'/>
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
      </div>
    </div>
  )
}

export default Home