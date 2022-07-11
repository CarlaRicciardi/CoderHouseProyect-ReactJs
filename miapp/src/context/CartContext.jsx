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

  console.log('llego')
  //   const newItem = {
  //     id: item.id,
  //     title: item.title,
  //     description: item.description,
  //     pictureUrl: item.pictureUrl,
  //     price: item.price,
  //     stock: item.stock,
  //     category: item.category,
  //     quantity: quantity,
  //     total: item.price * quantity,
  //   };

  //   const isInCart = cart.find((product) => product.id === item.id);
  //   // productoEncontrado devuelve true or false

  //   if (isInCart) {
  //     setCart(
  //       cart.map((prod) => {
  //         if (prod.id === item.id) {
  //           return {
  //             ...prod,
  //             quantity: (prod.quantity += quantity),
  //             total: quantity * item.price,
  //           };
  //           // (...)trae el producto como esta pero modifica la cantidad
  //         } else {
  //           return prod;
  //         }
  //       })
  //     );
  //   } else {
  //     //si el productoEncontrado es false:
  //     setCart(
  //       [...cart, newItem]
  //       //si el producto no fue encontrado, quiero insetar en mi array un producto nuevo manteniendo lo que ya hay
  //     );
  //   }

  //   setNumCarrito(numCarrito + newItem.quantity); //seteo el numerito del carrito
  //   setPrecioTotalCarrito(precioTotalCarrito + newItem.total); //seteo el total del carrito
  };

  const removeItem = (itemId) => {
    //el filter recorre el array y devuelve uno nuevo segun la cond. que se le pone
    const nuevoArray = cart.filter((prod) => prod.id !== itemId); //es un nuevo array sin el item encontrado
    setCart(nuevoArray);
  };

  return (
    <cartContext.Provider
      value={{ cart, clear, addItem, removeItem, numCarrito }}
    >
      {children}
    </cartContext.Provider>
  );
}
