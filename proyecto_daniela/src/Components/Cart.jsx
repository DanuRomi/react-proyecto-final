import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import CheckoutForm from './CheckoutForm';

const Cart = () => {

    const { cart, totalPrice, removeItem, clearCart } = useCartContext();
    const [showCheckOutForm, setShowCheckoutForm] = useState(false);
    
    const handleRemoveItem = (id, price, qty) => {
        removeItem(id, price, qty);
    }

    const handleClearCart = () => {
        clearCart();
    }

    const handleFinishOrder = () => {
        setShowCheckoutForm(true);
    }

    return (
        <>
            { 
                showCheckOutForm ? <CheckoutForm cart={cart} total={totalPrice} /> :            
                cart?.length > 0 ?
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { cart.map(({id, image, name, price, qty}, index) => {
                                return (
                                    <tr key={index}>
                                        <td><img width={100} src={image}></img></td>
                                        <td>{name}</td>
                                        <td>{price}</td>
                                        <td>{qty}</td>
                                        <td><button onClick={() => handleRemoveItem(id, price, qty)} className='btn btn-dark'>Remover</button></td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan={5}>
                                <strong>Total: ${totalPrice}</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                    <button onClick={handleClearCart} className='m-3 btn btn-dark'>Vaciar carrito</button>
                    <button onClick={handleFinishOrder} className='btn btn-dark'>Terminar compra</button>
                </div>
                : <h3 className='p-3'> No tenes productos en tu carrito!</h3>
            }
  
        </>
    )
}

export default Cart