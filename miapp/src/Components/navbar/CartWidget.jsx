
import React from 'react'
import { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {

  const {cart} = useContext(cartContext);
  
  return (  
    <div>
      <Link to={'/cart'}><ShoppingCartIcon></ShoppingCartIcon></Link>
      <span>{cart.reduce((p, c)=> p + c.quantity ,0)}</span>
    </div>
  )
}

