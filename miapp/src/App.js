//@ts-check
import NavBar from './Components/navbar/NavBar';
import ItemListContainer from './Components/items/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './Components/items/ItemDetailContainer';
import Footer from './Components/footer/Footer';


function App() {
  return (
    <>
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

    </>
  );
}

export default App;
