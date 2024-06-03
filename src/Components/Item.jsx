import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, name, description, price, image }) => {

  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={ image } className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{ name }</h5>
            <p className="card-text">{ description }</p>
            <Link to={`/producto/${id}`} className="btn btn-dark">Ver detalle</Link>
        </div>
    </div>
  )
}

export default Item