import React, {useContext} from 'react'
import {cartContext} from '../../context/CartContext'

export default function Cart() {
   const {cart} = useContext(cartContext);
  return (
    <div>
      {cart.length && cart.map(item=><li key={item.id}>{item.title} / {item.quantity} </li>)}
    </div>
  )
}
