import React from 'react'
import CoinItems from './CoinItems'
import Spinners from './Spinners'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Coins = ({ coins, loading }) => {

    return (
        <>
            <Helmet>
                <title>Cryptocurrency List - Latest Prices and Market Data</title>
                <meta name="description" content="Explore the latest prices and market data for various cryptocurrencies. Check price changes, volume, and market cap." />
                <meta property="og:title" content="Cryptocurrency List - Latest Prices and Market Data" />
                <meta property="og:description" content="Get up-to-date information on the prices and market data of different cryptocurrencies. See price changes, volume, and more." />
                <meta property="og:image" content="default-image-url" />
            </Helmet>
            <div className="heading container flex flex-1 items-center justify-evenly mx-auto max-w-[1000px] drop-shadow-2xl shadow-xl p-3">
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p className=''>Price</p>
                <p className=''>24hr</p>
                <p className='hide-mobile hidden md:block'>Volume</p>
                <p className='hide-mobile hidden md:block'>Market Price</p>
            </div>

            <div className="container flex flex-col items-center justify-evenly mx-auto max-w-[1000px] w-full flex-1 overflow-hidden ">
                {loading ? (<Spinners />) : (
                    coins.map(coin => {
                        return (
                            <Link to={`/coin/${coin.id}`} key={coin.id} className="container flex flex-col items-center justify-evenly mx-auto max-w-[1000px] w-full flex-1 overflow-hidden ">
                                <CoinItems coins={coin} />
                            </Link>
                        )
                    })
                )}
            </div>
        </>
    )
}

export default Coins