import React from 'react'
import './Offers.css'
import exclusive from "../../assets/exclusive_image.webp"

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
           <h1>Exclusive</h1>
           <h2>Offers For You</h2>
           <p>Best Prcies For You</p>
           <button>Check Now</button>
        </div>
        <div className='offers-right'>
           <img src ={exclusive} alt='exclusive image' />
        </div>
    </div>
  )
}

export default Offers