import DOMPurify from 'dompurify'
import React from 'react'

const CoinInfo = ({coin}) => {
  return (
    <>
       <div className="container flex flex-col mx-auto max-w-fit w-full overflow-x-scroll
       ">
      <div className="">
        <p className="flex items-center text-center justify-center my-3 mx-auto text-2xl font-semibold uppercase p-3 shadow-xl md:w-[700px] w-[300px]">{coin.name}</p>
        </div>
      <div className="flex mx-auto uppercase md:w-[700px] w-[300px]">
        <span className="bg-bgPurple w-fit my-2 p-1 rounded font-semibold text-sm">Rank #{coin.market_cap_rank}</span>
      </div>
      <div className="container flex mx-auto justify-between md:w-[700px] w-[300px] ">
        <div className="coin-heading flex gap-2">
          <p>{coin.image ? <img src={coin.image.small} alt='' width={'25px'} /> : null}</p>
          <p>{coin.name ? coin.name : null}</p>
          <p>{coin.symbol ? coin.symbol : null}</p>
        </div>
        <div className="">
          <p className="font-semibold text-xl md:text-3xl">{coin.market_data ? <p>${coin.market_data.current_price.usd.toLocaleString()}</p> : null}</p>
        </div>
      </div>
        <div className="flex items-center text-center justify-evenly my-3 mx-auto text-sm font-semibold uppercase p-3 shadow-xl md:w-[700px] w-[350px]">
          <table className='border-spacing-2 w-full border-slate-500'>
            <thead>
              <tr >
                <th>1h</th>
                <th>24h</th>
                <th>7d</ th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr className='font-normal text-xs md:text-xl border-spacing-2'>
                <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd}</p> : null}</td>
                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd}</p> : null}</td>
                <td>{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd}</p> : null}</td>
                <td>{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd}</p> : null}</td>
                <td>{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd}</p> : null}</td>
                <td>{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd}</p> : null}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center text-center justify-center my-3 mx-auto ">
          <div className="flex flex-col md:flex-row justify-between mx-auto w-[300px] md:w-[700px] gap-3 p-3 my-3 shadow-xl">
            <div className="flex flex-col">
              <div className="flex p-3 justify-between gap-3 border-b my-3">
              <p className='font-semibold font-Ubuntu'>24 Hour Low</p>
              <p>{coin.market_data?.low_24h ? <p>{coin.market_data.low_24h.usd}</p> : null}</p>
              </div>
              <div className="flex p-3 justify-between gap-3 border-b my-3">
              <p className='font-semibold font-Ubuntu'>24 Hour High</p> 
              <p>{coin.market_data?.high_24h ? <p>{coin.market_data.high_24h.usd}</p> : null}</p>
              </div>
            </div>
            <div className="flex flex-col">
            <div className="flex p-3 justify-between gap-3 border-b my-3">
              <p className='font-semibold font-Ubuntu'>Market Cap</p>
              <p>{coin.market_data?.market_cap ? <p>{coin.market_data.market_cap.usd}</p> : null}</p>
              </div>
              <div className="flex p-3 justify-between gap-3 border-b my-3">
              <p className='font-semibold font-Ubuntu'>Circulating Supply</p>
              <p>{coin.market_data?.circulating_supply ? <p>{coin.market_data.circulating_supply}</p> : null}</p>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl md:w-[700px] w-[300px]">
              <p className='font-semibold text-lg p-3 font-Rubik uppercase'>About</p> 
              <p className='text-sm text-justify' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : '')}}></p>
            </div>
        </div>
    </div> 
    </>
  )
}

export default CoinInfo
