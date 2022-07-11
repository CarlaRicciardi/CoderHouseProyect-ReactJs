import React, {useContext} from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { cartContext } from '../../context/CartContext'

export default function ItemDetail({item}) {
  const {addItem} = useContext(cartContext);
  function onAdd(count){
    alert("Quiero agregar " + count + " bolsas de " + item.title)
    addItem(item, count);
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
        <Link to={'/Cart'}>
        <button>Finalizar Compra</button>
        </Link>
      </div>
      </div>
    </div>

    </>
  )
}
