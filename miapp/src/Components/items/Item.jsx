import React from 'react'
import './ItemListContainer.css'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

export default function Item({item}) {

  return (
    <div className="card" style={{width: "18rem"}}>
    <img src={item.pictureUrl?item.pictureUrl : <p>No hay imagen</p>} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-title">${item.price}</h6>
        <Link to={`/item/${item.id}`} className="btn btn-primary">VER DETALLE</Link>
      </div>
    </div>
   )
}


