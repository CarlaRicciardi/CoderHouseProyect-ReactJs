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
    const docRef = doc(db, 'items', idItem)
    getDoc(docRef).then((result) => {
      const myItem = {...result.data(), id: result.id};
      setItem(myItem);
    }).catch((err) => {
        setError(true);
    }).finally(() => {
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
