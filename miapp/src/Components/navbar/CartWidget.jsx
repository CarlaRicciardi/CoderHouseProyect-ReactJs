
import React from 'react'
import { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from '../../context/CartContext';

export default function CartWidget() {

  const {cart} = useContext(cartContext);
  
  return (
    // <button className="cart-icon" >
    //     <ShoppingCartIcon/>
    //     <span className='cart-item-total'>{numCarrito}</span>
    // </button>
    
    <div>
    <ShoppingCartIcon></ShoppingCartIcon>
    <span>{cart.reduce((p, c)=> p + c.quantity ,0) /*p es previous y c es current value, el 0 a lo ultimo es el valor incial. Tecnicamente sumamos todos los quantitys y ya.*/ }</span>
    </div>
  )
}

