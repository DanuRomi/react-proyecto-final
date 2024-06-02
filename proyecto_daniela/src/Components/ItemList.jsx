import React from 'react'
import Item from './Item'

const ItemList = ({productsList}) => {
  return (
    <div className="itemlist">
        {productsList?.map((element) => {
            return <Item key={element.id} {...element} />;
        })}
    </div>
  )
}

export default ItemList