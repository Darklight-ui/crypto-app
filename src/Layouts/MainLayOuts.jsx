import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from '../components/Navbar'
import 'react-toastify/dist/ReactToastify.css'
import { Helmet } from 'react-helmet'

const MainLayOuts = () => {
  return (
    <>
      <Helmet>
        <title>My Crypto App</title>
        <meta name="description" content="Discover the latest cryptocurrency prices and market trends." />
        <meta property="og:title" content="My Crypto App" />
        <meta property="og:description" content="Stay updated with the latest cryptocurrency prices, market trends, and news." />
        <meta property="og:image" content="default-image-url" />
      </Helmet>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default MainLayOuts