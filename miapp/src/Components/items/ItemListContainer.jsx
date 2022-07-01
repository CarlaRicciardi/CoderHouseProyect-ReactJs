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
          {id: 1, title: "Can Feed", description: "20Kg - Alimento Super Premium", pictureUrl: "/assets/img/perro-CanFeed.jpg", price: 6500, stock: 10, category: "perro"},
          {id: 2, title: "Dogui", description: "20Kg - Alimento Premium", price: 5500, pictureUrl:"/assets/img/perro-Dogui.jpg", stock: 20, category: "perro"},
          {id: 3, title: "Estampa", description: "20Kg - Alimento Standard", price: 4500, pictureUrl:"assets/img/perro-Estampa.jpg", stock: 5, category: "perro"},
          {id: 4, title: "IronPet", description: "15Kg - Alimento Premium", price: 4000, pictureUrl:"/assets/img/perro-IronPet.jpg", stock: 5, category: "perro"},
          {id: 5, title: "Ken-L", description: "15Kg - Alimento Standard", price: 5600, pictureUrl:"/assets/img/perro-KenL.jpg", stock:8, category: "perro"},
          {id: 6, title: "Sieger", description: "15Kg - Alimento Super Premium", price: 8200, pictureUrl:"/assets/img/perro-Sieger.jpg", stock: 20, category: "perro"},
          {id: 7, title: "TopNutrition", description: "15Kg - Alimento Super Premium", price: 7000, pictureUrl:"/assets/img/perro-TopNutrition.jpg", stock: 12, category: "perro"},
          {id: 8, title: "Estampa", description: "15Kg - Alimento Premium", price: 3000, pictureUrl:"/assets/img/gato-Estampa.jpg", stock: 2, category: "gato"},
          {id: 9, title: "Excellent", description: "7,5Kg - Alimento Super Premium", price: 2500, pictureUrl:"/assets/img/gato-Excellent.jpg", stock: 3, category: "gato"},
          {id: 10, title: "Gati", description: "7,5Kg - Alimento Standard", price: 2000, pictureUrl:"/assets/img/gato-Gati.jpg", stock: 9, category: "gato"},
          {id: 11, title: "IronPet", description: "10Kg - Alimento Premium", price: 3500, pictureUrl:"/assets/img/gato-IronPet.jpg", stock: 14, category: "gato"},
          {id: 12, title: "Ken-L", description: "10Kg - Alimento Standard", price: 4000, pictureUrl:"/assets/img/gato-KenL.jpg", stock: 5, category: "gato"},
          {id: 13, title: "Whiskas", description: "10Kg - Alimento Premium", price: 3200, pictureUrl:"/assets/img/gato-Whiskas.jpg", stock: 7, category: "gato"},
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
