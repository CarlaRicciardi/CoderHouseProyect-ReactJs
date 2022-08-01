import React from "react";
import { createContext, useState, useEffect } from "react";
import swal from 'sweetalert';

export const cartContext = createContext([]);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const prodStorage = localStorage.getItem("carrito");

    try {
      return prodStorage ? JSON.parse(prodStorage) : [];
    } catch(err) {
      console.log(err);
    }

  });
  const [numCarrito, setNumCarrito] = useState(0);

useEffect(() => {
  localStorage.setItem("carrito", JSON.stringify(cart));
}, [cart]);

const clear = () => {
    setCart([]);
  };

const isInCart = (id) => {
    return cart.find((element) => element.id === id);
  }

const addItem = (item, quantity) => {
  
  if(isInCart(item.id)){
    let auxCart = cart; 
    let indx = auxCart.findIndex(element=> element.id === item.id); 

    if(auxCart[indx].quantity + quantity > item.stock) {
      return(
        swal("Lo Siento :(", "No hay suficiente stock disponible", "error")
      )
    }

auxCart[indx].quantity = Number(auxCart[indx].quantity) + Number(quantity);  
    setCart([...auxCart]); 
  }else{
    setCart([...cart, {...item, quantity}])
  }
  };

const removeItem = (itemId) => {
    const nuevoArray = cart.filter((prod) => prod.id !== itemId); 
    setCart(nuevoArray);
  };


   return (
    <cartContext.Provider
      value={{ cart, clear, addItem, removeItem, numCarrito}}
    >
      {children}
    </cartContext.Provider>
  );
}
