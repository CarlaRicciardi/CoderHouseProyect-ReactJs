//@ts-check
import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState({});
  let {idItem} = useParams();


  useEffect(() => {
    let mostrarItems = new Promise ((result, reject) => {
      setTimeout(() => {
        result([
          {id: 1, title: "Can Feed", description: "20Kg", price: 6500, pictureUrl:"/assets/img/canFeed.jpg", stock: 10},
          {id: 2, title: "Can Feed Light", description: "20Kg", price: 5500, pictureUrl:"/public/assets/img/canFeedLight.jpg", stock: 20},
          {id: 3, title: "Top Nutrition", description: "25Kg", price: 4500, pictureUrl:"/public/assets/img/topNutrition.jpg", stock: 5},
          {id: 4, title: "Yenu", description: "15Kg", price: 3000, pictureUrl:"/public/assets/img/yenu.jpg", stock: 25},
        ])
        reject("Error")
      }, 2000);
    })
    .then((result) => {
      let itemFiltrado = result.find((item) => item.id == idItem);
       setItem(itemFiltrado);
    })
    .catch((err) => {
      setError(true);
      
    })
    .finally(()=> {
      setLoading(false);
    })
  }, [idItem])
  

  return (
    <div>
      {loading && "Loading..."}
      {error && "ERROR: algo salio mal"}
      {item && <ItemDetail item={item} />}

    </div>

  )
}
