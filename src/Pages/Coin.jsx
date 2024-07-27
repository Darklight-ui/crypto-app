import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CoinInfo from '../components/CoinInfo'
import Spinners from '../components/Spinners'
import { Helmet } from 'react-helmet'

const Coin = ({coin}) => {
    const [coinData, setCoinData] = useState({})
    const [loading, setLoading] = useState(true);
    const params = useParams();

    const url = `https://api.coingecko.com/api/v3/coins/${params.id}`

    useEffect(() => {
        axios.get(url).then((res) => {
            setCoinData(res.data)
            setLoading(false)
        }).catch((error) =>{
            console.log(error)
            setLoading(false)
        })
    }, [])
  return (
    <>
    <Helmet>
        <title>{coinData.name ? `${coinData.name} - Coin Details` : 'Coin Details'}</title>
        <meta name="description" content={`Get the latest information about ${coinData.name}. Price, market cap, volume, and more.`} />
        <meta property="og:title" content={`${coinData.name} - Coin Details`} />
        <meta property="og:description" content={`Current price, market cap, and volume of ${coinData.name}.`} />
        <meta property="og:image" content={coinData.image ? coinData.image.large : 'default-image-url'} />
      </Helmet>
      <div className="flex mx-auto">
      {loading ? <Spinners /> : <CoinInfo coin={coinData}/>}
      </div>
    </> 
  )
}

export default Coin