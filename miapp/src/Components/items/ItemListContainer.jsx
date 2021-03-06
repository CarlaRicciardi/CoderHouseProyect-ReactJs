import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Slider from '../slider/Slider';
import {collection, getDocs, getFirestore} from 'firebase/firestore';

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  let {idCategory} = useParams();

useEffect(() => {
  const db = getFirestore();
  const collectionAlimentos = collection(db, 'items')
  getDocs(collectionAlimentos).then((result) => {
    const auxArray = result.docs.map((item) => ({...item.data(), id: item.id}));
    setItems(auxArray);
  }).catch((error) => {
      setError(true);
  }).finally(() => {
      setLoading(false);
  })
}, [])

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
