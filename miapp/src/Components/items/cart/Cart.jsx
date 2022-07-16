import React, {useContext} from 'react'
import {cartContext} from '../../../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export default function Cart() {
   const {cart, removeItem, clear ,total, cantidad, precioTotalCarrito} = useContext(cartContext);

  return (
    <div>
      <h2 className='title'>CARRITO</h2>
      {(cart.length === 0) && 
        <div style={{textAlign: 'center'}}>
          <p>No hay productos en tu carrito</p>
          <Link to={'/'}><button className='btn btn-primary' style={{color: "#2f4858", backgroundColor: "#f6ae2d", border: "none"}}>Ir a la tienda</button></Link>
        </div>
      }
      {
        cart.map((item)=> (
          <div key={ item.id } className='ctable-container'>
            <div className='ctable-item'>
              <img className='img-cart' src={`/assets/img/${item.image}`}/>
            </div>
            <div className='ctable-item'>
              <h3>Producto</h3>
              <p>{item.title}</p>
            </div>
            <div className='ctable-item'>
              <h3>Precio</h3>
              <p>$ {item.price}</p>
            </div>
            <div className='ctable-item'>
              <h3>Cantidad</h3>
              <p>{item.quantity}</p>
            </div>
            <div className='ctable-item'>
              <h3>Eliminar</h3>
              <HighlightOffIcon className="cart-icon" fontSize="large" 
              onClick={() => removeItem(item.id)}/>
            </div>
          </div>
        ))
      }
      
      {
            (cart.length >= 1)
            
            &&

            <div className='total-container'>
                <h4 className='cart-total'> Total: ${precioTotalCarrito} </h4>
                <button className="btn-primary">Comprar</button>
                <button className="btn-primary" onClick={clear}>Vaciar carrito</button>
            </div>

        }

    </div>

    
  )
}
