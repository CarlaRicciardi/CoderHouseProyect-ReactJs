import { useState } from 'react'
import './ItemListContainer.css'
import './ItemCount.css'

export default function ItemCount({stock, onAdd}) {
    const [count, setCount] = useState(1);


    const add = () => {
        if(count < stock) {
            setCount(count + 1) 
        }
    }

    const remove = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

  return (
    <>
    <div className='container-quantity'>
    <button className='btn-quantity' onClick={remove}>-</button>
    <p className='p-quantity'> {count}</p>
    <button className='btn-quantity' onClick={add}>+</button>
    <br />
    <button className='btnComprar boton' onClick={() => onAdd(count)}>AGREGAR AL CARRITO</button>
    </div>
    </>
  )
}
