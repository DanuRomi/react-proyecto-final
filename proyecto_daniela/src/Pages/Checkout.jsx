import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { ordenId } = useParams();
    const navigate = useNavigate();

    const handleGoToProducts = () => {
      navigate("/productos");
    }

    return (
      <>
        <div className='p-3'>
            <h2>Su orden fue terminada con éxito!</h2>
            <span>Identificador de orden: {ordenId}</span>
        </div>
        <button className='btn btn-dark' onClick={handleGoToProducts}>Volver a productos</button>
      </>
  )
}

export default Checkout