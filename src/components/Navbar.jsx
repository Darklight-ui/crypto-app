import React from 'react'
import {FaCoins} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <NavLink to={'/'} className="navbar flex justify-center items-center p-3">
        <FaCoins className=" text-2xl text-primary" />
        <h1 className='mx-3 font-bold text-2xl font-fira-sans-thin'>Coin <span className='text-primary p-2'>Price Update</span> </h1>
    </NavLink>
    </>
  )
}

export default Navbar