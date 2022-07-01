import { useState } from 'react'
import './ItemListContainer.css'
import Item from './Item'

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
    <button onClick={remove}>-</button>
    <p>{count}</p>
    <button onClick={add}>+</button>
    <br />
    <button onClick={() => onAdd(count)}>AGREGAR AL CARRITO</button>
    </>
    
  )
}
