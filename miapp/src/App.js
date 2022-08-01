//@ts-check
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import NavBar from './Components/navbar/NavBar';
import ItemListContainer from './Components/items/ItemListContainer';
import ItemDetailContainer from './Components/items/ItemDetailContainer';
import Footer from './Components/footer/Footer';
import CheckOut from './Components/checkOut/CheckOut';


//Context
import {CartProvider} from './context/CartContext';
import Cart from './Components/items/cart/Cart';
import Nosotros from './Components/pages/Nosotros';
import Contacto from './Components/pages/Contacto';


function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:idCategory" element={<ItemListContainer />}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<CheckOut/>}/>
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
