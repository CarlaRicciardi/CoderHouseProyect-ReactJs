import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore} from 'firebase/firestore'

export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState({});

  let {idItem} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, 'items', 'Gd8zZGeZOaFyeAtvge41')
    getDoc(docRef).then((result) => {
      const item = {...result.data(), id: result.id};
      console.log(item)
    }).catch((err) => {
        setError(true);
    }).finally(() => {
        setLoading(false);
    })
  }, [])
    

  return (
    <div>
      {loading && "Loading..."}
      {error && "ERROR: algo salio mal"}
      {item && <ItemDetail item={item}/>}

    </div>

  )
}
