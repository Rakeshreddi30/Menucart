import React from 'react'

const QuantityItem = ({id,quantity, changeQuantity}) => {
  return (
    <div style={{display:"flex"}}>
        <button onClick={()=>changeQuantity(id,-1)}>-</button>
        <p>{quantity}</p>
        <button onClick={()=>changeQuantity(id, +1)}>+</button>
    </div>
  )
}

export default QuantityItem