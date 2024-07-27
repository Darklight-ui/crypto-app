import React from 'react'
import { ScaleLoader } from 'react-spinners';

const overide = {
    display: 'block',
    margin: '100px auto'
}

const Spinners = ({loading}) => {
  return (
    <ScaleLoader 
    color='#ffffff'
    loading={loading}
    cssOverride={overide}
    size={250 }
    />
  )
}

export default Spinners