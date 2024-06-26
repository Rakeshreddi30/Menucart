import React from 'react'
import LabelItem from './LabelItem'
import QuantityItem from './QuantityItem'

const CartItem = (props) => {
    const{id, label, price, quantity, changeQuantity} = props
  return (
    <div style={{display:"flex", gap:"100px"}}>
        <LabelItem label={label} price={price}/>
        <QuantityItem id={id} quantity={quantity} changeQuantity={changeQuantity}/>
    </div>
  )
}

export default CartItem