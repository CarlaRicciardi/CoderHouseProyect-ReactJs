import React from 'react'
import { createContext, useState } from 'react'


export const cartContext = createContext();

export default function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    const [numCarrito, setNumCarrito] = useState(0);

    const clear = ()=> {
        setCartProducts([])
    }

    const addItem = (item, count)=> {
        const itemRepetido = cartProducts.find(product => {
            return product.id == item.id
        })
        setNumCarrito(numCarrito + count)
    }

    const removeItem = () => {
        
    }

  return (
    <cartContext.Provider value = {{clear, addItem, numCarrito}}>
        {children}
    </cartContext.Provider>
  )
}
