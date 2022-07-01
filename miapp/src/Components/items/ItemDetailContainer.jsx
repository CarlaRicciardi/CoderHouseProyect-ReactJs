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
          {id: 1, title: "Can Feed", description: "20Kg", pictureUrl: "/assets/img/perro-CanFeed.jpg", price: 6500, stock: 10, category: "perro"},
          {id: 2, title: "Dogui", description: "20Kg", price: 5500, pictureUrl:"/assets/img/perro-Dogui.jpg", stock: 20, category: "perro"},
          {id: 3, title: "Estampa", description: "20Kg", price: 4500, pictureUrl:"assets/img/perro-Estampa.jpg", stock: 5, category: "perro"},
          {id: 4, title: "IronPet", description: "15Kg", price: 4000, pictureUrl:"/assets/img/perro-IronPet.jpg", stock: 5, category: "perro"},
          {id: 5, title: "Ken-L", description: "15Kg", price: 5600, pictureUrl:"/assets/img/perro-KenL.jpg", stock:8, category: "perro"},
          {id: 6, title: "Sieger", description: "15Kg", price: 8200, pictureUrl:"/assets/img/perro-Sieger.jpg", stock: 20, category: "perro"},
          {id: 7, title: "TopNutrition", description: "15Kg", price: 7000, pictureUrl:"/assets/img/perro-TopNutrition.jpg", stock: 12, category: "perro"},
          {id: 8, title: "Estampa", description: "15Kg", price: 3000, pictureUrl:"/assets/img/gato-Estampa.jpg", stock: 2, category: "gato"},
          {id: 9, title: "Excellent", description: "7,5Kg", price: 2500, pictureUrl:"/assets/img/gato-Excellent.jpg", stock: 3, category: "gato"},
          {id: 10, title: "Gati", description: "7,5Kg", price: 2000, pictureUrl:"/assets/img/gato-Gati.jpg", stock: 9, category: "gato"},
          {id: 11, title: "IronPet", description: "10Kg", price: 3500, pictureUrl:"/assets/img/gato-IronPet.jpg", stock: 14, category: "gato"},
          {id: 12, title: "Ken-L", description: "10Kg", price: 4000, pictureUrl:"/assets/img/gato-KenL.jpg", stock: 5, category: "gato"},
          {id: 13, title: "Whiskas", description: "10Kg", price: 3200, pictureUrl:"/assets/img/gato-Whiskas.jpg", stock: 7, category: "gato"},
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
      {item && <ItemDetail item={item}/>}

    </div>

  )
}
