import React from 'react'
import "./Populer.css"
import Item from '../Item/Item'
import data_product from "../../assets/data_product.js"


function Popular() {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN'S</h1>
        <hr/>
        <div className='popular-item'>
            {data_product.map((item, i) => {
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular