import React from 'react'
import ItemCount from './ItemCount'
import { useCartContext } from '../context/CartContext'

const ItemDetail = (item) => {
  const { id, name, description, price, image, stock } = item;
  const { addToCart } = useCartContext();

  const handleAddToCart = (cantidad) => {
    addToCart(item, cantidad);
  };

  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={ image } className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{ name }</h5>
            <p className="card-text">{ description }</p>
            <p className="card-text">${ price }</p>
            {
              stock > 0 ?
              <ItemCount handleAddToCart={handleAddToCart} />
              : <b>Sin stock!</b>
            }
        </div>
    </div>
  )
}

export default ItemDetail