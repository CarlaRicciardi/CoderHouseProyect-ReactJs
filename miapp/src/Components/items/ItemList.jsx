import React from 'react'
import Item from './Item'
import './ItemList.css'

export default function ItemList({items}) {
  return (
    <div className='itemList row container'>
        {items.map(item =>(
            <Item className='col-4' key={item.id} item={item} />
        ))
        }
    </div>
  )
}
