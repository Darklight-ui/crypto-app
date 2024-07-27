import React from 'react'

const CoinItems = ({coins}) => {
  return (
    <>
        <div className="coins-row flex justify-evenly items-center w-full p-3 shadow-lg cursor-pointer my-3  hover:scale-95 transition-all">
        <p>
            {coins.market_cap_rank}
        </p>
        <div className="flex justify-between items-center space-x-1">
            <img src={coins.image} alt="" width={'25px'}/>
        <p className='uppercase'>
            {coins.symbol.toUpperCase()}
        </p>
        </div>
    <p>
        ${coins.current_price.toFixed(2)}
    </p>
    <p>
        {coins.price_change_percentage_24h.toLocaleString()}%
    </p>
    <p className="hide-mobile hidden md:block">${coins.total_volume.toLocaleString()}</p>
    <p className="hide-mobile hidden md:block">${coins.market_cap.toLocaleString()}</p>
    </div>
    </>
  )
}

export default CoinItems