//@ts-check
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from '../../context/CartProvider';
import { useContext } from 'react';

export default function CartWidget() {

  const {numCarrito} = useContext(cartContext);

  return (
    <button className="cart-icon" >
        <ShoppingCartIcon/>
        <span className='cart-item-total'>{numCarrito}</span>
    </button>
    
    // <>
    // <ShoppingCartIcon>
    //   {numCarrito}
    // </ShoppingCartIcon>

    // </>
  )
}

