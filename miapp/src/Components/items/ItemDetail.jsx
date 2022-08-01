import React, {useContext} from 'react'
import ItemCount from './ItemCount'
import './ItemDetail.css'
import { cartContext } from '../../context/CartContext'
import swal from 'sweetalert';

export default function ItemDetail({item}) {
  const {addItem} = useContext(cartContext);


  function onAdd(count){
    addItem(item, count);
    swal("Genial!", `Se agregó ${item.title} al carrito!`, "success");
  }

  console.log(item)
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
