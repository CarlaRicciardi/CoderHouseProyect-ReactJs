import React from 'react'
import './ItemListContainer.css'
import { Link } from 'react-router-dom'

export default function Item({item}) {

  return (
    <div className ="card" style={{width: "18rem"}} >
    <img src={item.pictureUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">{item.title}</h4>
        <h6 class="card-subtitle mb-2 text-muted">{item.description}</h6>
        <h6 className="card-title">${item.price}</h6>
        <Link to={`/item/${item.id}`} className="btn btn-primary" style={{color: "#2f4858", backgroundColor: "#f6ae2d", border: "none"}}>VER DETALLE</Link>
      </div>
    </div>
   )
}


