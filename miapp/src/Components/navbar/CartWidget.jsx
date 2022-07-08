
import React from 'react'
import { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from '../../context/CartContext';

export default function CartWidget() {

  const {numCarrito} = useContext(cartContext);

  return (
    // <button className="cart-icon" >
    //     <ShoppingCartIcon/>
    //     <span className='cart-item-total'>{numCarrito}</span>
    // </button>
    
    <div>
    <ShoppingCartIcon></ShoppingCartIcon>
    <span>{numCarrito}</span>
    </div>
  )
}

