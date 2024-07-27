import { useState, useEffect } from "react"
import axios from "axios"
import Coins from "./components/Coins";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayOuts from "./Layouts/MainLayOuts";
import Coin from "./Pages/Coin";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1'
  useEffect(() =>{
    axios.get(url).then((response) =>{
      setCoins(response.data)
      setLoading(false)
      console.log(response.data[0])
    }).catch((error) =>{
      console.log(error)
      setLoading(false);
    })
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"  element={<MainLayOuts />}>
        <Route index element={<Coins coins={coins} loading={loading} />} />
        <Route path="/coin/:id" element={<Coin />} />
      </Route>
    )
  )
  return ( 
    <div className="bg-bgColor min-h-screen text-offWhite">
      <RouterProvider router={router} />
    </div>
   )
}

export default App