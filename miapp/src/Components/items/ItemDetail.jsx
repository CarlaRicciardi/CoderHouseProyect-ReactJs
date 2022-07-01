import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({item}) {
  function onAdd(count){
    alert("Quiero agregar " + count + " bolsas de " + item.title)
  }
  
  return (
    <>
    <div className="card" style= {{width: "18rem"}}>
      <img src={item.pictureUrl} style= {{width: "300px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">Alimento Super Premium para perros adultos. Posee 28% de proteinas.</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
    <ItemCount stock={item.stock} onAdd={onAdd}/>
    </>
  )
}
