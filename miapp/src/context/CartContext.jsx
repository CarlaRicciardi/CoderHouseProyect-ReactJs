import React from "react";
import { createContext, useState } from "react";

export const cartContext = createContext([]);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [numCarrito, setNumCarrito] = useState(0);
  const [precioTotalCarrito, setPrecioTotalCarrito] = useState(0);

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((element) => element.id === id);
  }

  const addItem = (item, quantity) => {
  
  if(isInCart(item.id)){
    //producto existe
    let auxCart = cart; //hago una copia de mi carrito actual
    let indx = auxCart.findIndex(element=> element.id == item.id); //busco index del producto por id
    auxCart[indx].quantity = Number(auxCart[indx].quantity) + Number(quantity);  // sumo quantity al valor que vino en el onAdd.
    setCart([...auxCart]); //seteo todo el array de nuevo pero modificado
  }else{
    setCart([...cart, {...item, quantity}])
  }
  setPrecioTotalCarrito(precioTotalCarrito + item.price * item.cantidad)
  };

  const removeItem = (itemId) => {
    //el filter recorre el array y devuelve uno nuevo segun la cond. que se le pone
    const nuevoArray = cart.filter((prod) => prod.id !== itemId); //es un nuevo array sin el item encontrado
    setCart(nuevoArray);
  };

  const total = () => {
    return cart.reduce((acum, item) => acum = acum + (item.price * item.cantidad), 0);
 }

const cantidad = () => {
     return cart.reduce((acum, item) => acum += item.cantidad, 0);
 } 

  return (
    <cartContext.Provider
      value={{ cart, clear, addItem, removeItem, numCarrito, total, cantidad, precioTotalCarrito }}
    >
      {children}
    </cartContext.Provider>
  );
}
