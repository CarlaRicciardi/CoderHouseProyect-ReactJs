//@ts-check
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import NavBar from './Components/navbar/NavBar';
import ItemListContainer from './Components/items/ItemListContainer';
import ItemDetailContainer from './Components/items/ItemDetailContainer';
import Footer from './Components/footer/Footer';

//Context
import CartContext from './context/CartContext';


function App() {

  return (
    <>
    <CartContext>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:idCategory" element={<ItemListContainer />}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer />}/>
            {/* <Route path="*"/> PARA 404*/}
          </Routes>
        <Footer />
      </BrowserRouter>
    </CartContext>
    </>
  );
}

export default App;
