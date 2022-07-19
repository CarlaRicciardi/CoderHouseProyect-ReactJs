import React from "react";
import { createContext, useState } from "react";

export const cartContext = createContext([]);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [numCarrito, setNumCarrito] = useState(0);

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
        alert("No hay suficiente stock")
      )
    }

    auxCart[indx].quantity = Number(auxCart[indx].quantity) + Number(quantity);  
    setCart([...auxCart]); 
  }else{
    setCart([...cart, {...item, quantity}])
  }
  };

  const removeItem = (itemId) => {
    //el filter recorre el array y devuelve uno nuevo segun la cond. que se le pone
    const nuevoArray = cart.filter((prod) => prod.id !== itemId); //es un nuevo array sin el item encontrado
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
