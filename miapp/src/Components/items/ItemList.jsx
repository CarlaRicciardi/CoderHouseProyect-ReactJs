import React from 'react'
import Item from './Item'
import './ItemList.css'

export default function ItemList({items}) {
  return (
    <div className='itemList container'>
        {items.map(item =>(
            <Item key={item.id} item={item} />
        ))
        }
    </div>
  )
}
