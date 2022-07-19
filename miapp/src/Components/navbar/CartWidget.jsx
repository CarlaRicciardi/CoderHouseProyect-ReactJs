
import React from 'react'
import { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';

export default function CartWidget() {

  const {cart} = useContext(cartContext);
  
  return (  
    <div>
      <Link to={'/cart'} style={{color: '#f6ae2d'}}><ShoppingCartIcon></ShoppingCartIcon></Link>
      <span style={{color: '#f6ae2d'}}>{cart.reduce((p, c)=> p + c.quantity ,0)}</span>
    </div>
  )
}

