import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({item}) {
  function onAdd(count){
    alert("Quiero agregar " + count + " bolsas de " + item.title)
  }
  
  return (
    <>
    <div className="card mb-3" style={{maxWidth: "1000px", padding: "50px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.pictureUrl} className="img-fluid rounded-start" alt="..."/>
        </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text">${item.price}</p>
          <p className="card-text"><small className="text-muted">Stock: {item.stock} unidades</small></p>
        </div>
        <ItemCount stock={item.stock} onAdd={onAdd}/>
      </div>
      </div>
    </div>

    </>
  )
}


{/* <div classNameName="card" style= {{width: "18rem"}}>
      <img src={item.pictureUrl} style= {{width: "300px"}} classNameName="card-img-top" alt="..."/>
      <div classNameName="card-body">
        <h5 classNameName="card-title">{item.title}</h5>
        <p classNameName="card-text">Alimento Super Premium para perros adultos. Posee 28% de proteinas.</p>
        {/* <a href="#" classNameName="btn btn-primary">Go somewhere</a> */}
        // </div>
        // </div>
        // <ItemCount stock={item.stock} onAdd={onAdd}/> */}