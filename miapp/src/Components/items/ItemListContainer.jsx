//@ts-check
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Slider from '../slider/Slider';

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  let {idCategory} = useParams();


  useEffect(() => {
    let listaItems = new Promise ((result, reject) => {
      setTimeout(() => {
        result([
          {id: 1, title: "Can Feed", description: "20Kg", price: 6500, pictureUrl:"./public/assets/img/canFeed.jpg", stock: 10, category: "superPremium"},
          {id: 2, title: "Can Feed Light", description: "20Kg", price: 5500, pictureUrl:"./public/assets/img/canFeedLight.jpg", stock: 20, category: "superPremium"},
          {id: 3, title: "Top Nutrition", description: "25Kg", price: 4500, pictureUrl:"./public/assets/img/topNutrition.jpg", stock: 5, category: "premium"},
          {id: 4, title: "Yenu", description: "15Kg", price: 3000, pictureUrl:"./public/assets/img/yenu.jpg", stock: 25, category: "standard"},
        ])
        reject("Error")
      }, 2000);
    })
    .then((result) => {
      if (!idCategory) {
        setItems(result);
      }else {
        let arrayFiltrado = result.filter((item) => item.category === idCategory);
        setItems(arrayFiltrado);
      }

    })
    .catch((err) => {
      setError(true);
      
    })
    .finally(()=> {
      setLoading(false);
    })
  }, [idCategory])
  
  return (
    <>
    <div>
      <Slider />
      <h2 className='title'>NUESTROS PRODUCTOS</h2>
      {loading && "Loading..."}
      {error && "ERROR: algo salio mal"}
      {items && <ItemList items={items} />}
      
    </div>
    </>

  )
}
