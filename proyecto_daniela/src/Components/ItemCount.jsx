import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ItemCount = ({handleAddToCart}) => {
    const [cantidad, setCantidad] = useState(0);
    const [productoAgregado, setProductoAgregado] = useState(false);
    const navigate = useNavigate();

    const addCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const removeCantidad = () => {
        if (cantidad > 0){
            setCantidad(cantidad - 1);
        }
    };

    const handleTerminarCompra = () => {
        navigate("/carrito");
    }

    const handleAgregarCarrito = () => {
        if (cantidad > 0){
            setProductoAgregado(true);
            handleAddToCart(cantidad);
        }
    }

    return (
        <div>
            { !productoAgregado ?
                <>
                    <div className='p-3'>
                        <button className='btn btn-dark' onClick={ removeCantidad }>-</button>
                        <span className='p-2'>{ cantidad }</span>
                        <button className='btn btn-dark' onClick={ addCantidad }>+</button>
                    </div>
                    <button style={{width:"100%"}} className='btn btn-dark' onClick={handleAgregarCarrito} disabled={cantidad <= 0}>Agregar al carrito</button>
                </>
                :   <button style={{width:"100%"}} className='btn btn-dark' onClick={handleTerminarCompra} >Ir al carrito</button>
            }   
        </div>
    )
}

export default ItemCount