import React, { useState } from 'react'
import CartItem from './CartItem'
import TotalItem from './TotalItem'


const Items = [
    {id:1, label:"Egg rice", quantity:1, price:50},
    {id:2, label:"Biryani", quantity:1, price:110},
    {id:3, label:"FriedRice", quantity:1, price:60},
   ];
const CartContainer = () => {
     const[cart, setCart] = useState(Items)
      
     const ChangeQuantity = (id, value)=>{
        let updateQuantity =  cart.map((item)=>(
            item.id=== id? {...item, quantity:item.quantity+value} : item
        )) 
       setCart(updateQuantity)
    }
    const totalPrice = cart.reduce((bag, item)=>{
           return bag + item.price* item.quantity
    },0)
  return (
    <div>
        {  cart.map((item)=>{
             return <CartItem key={item.id} {...item} changeQuantity={ChangeQuantity}/>
        })
        } 
       <TotalItem  totalPrice={totalPrice}/>
    </div>
    
  )
}

export default CartContainer
