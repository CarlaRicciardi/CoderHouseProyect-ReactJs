//@ts-check
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import NavBar from './Components/navbar/NavBar';
import ItemListContainer from './Components/items/ItemListContainer';
import ItemDetailContainer from './Components/items/ItemDetailContainer';
import Footer from './Components/footer/Footer';

//Context
import {CartProvider} from './context/CartContext';
import Cart from './Components/items/cart/Cart';


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
            <Route path="/Cart" element={<Cart/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
