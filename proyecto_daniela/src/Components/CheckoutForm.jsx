import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../firebase/dbConnection';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import Loading from './Loading';

const CheckoutForm = ({cart, total}) => {
    const { clearCart } = useCartContext();
    const [loading, setLoading] = useState(false);
    const formFields =  ["Nombre", "Apellido", "Email", "Direccion"];
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        direccion: ""
    });

    const navigate = useNavigate();

    const onInputChange = (evt) => {
        const { name, value } = evt.target;

        setFormData(
            {
                ...formData,
                [name]: value
            }
        );
    }

    const submit = () => {

        setLoading(true);

        const orderCollection = collection(db, "orders");
        const newOrder = {
            buyer: formData,
            items: cart,
            date: new Date(),
            total: total
        }
        
        addDoc(orderCollection, newOrder)
        .then((res) => {
            clearCart();
            navigate("/checkout/" + res.id);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

    return (          
        <>     
            { loading ? <Loading /> :
            <div className='container-sm col-lg-4'>
                <h3 className='p-3'>Complete sus datos:</h3>
                <form method='POST' action=''>
                    { formFields.map((value, index) => {
                        return (          
                            <div key={index} className="mb-3 row">
                                <label className="form-label col-sm-2">{value}</label>
                                <div className="col-sm-10">
                                    <input type="text" onChange={(evt) => onInputChange(evt)} className="form-control" name={value.toLocaleLowerCase()} />
                                </div>
                            </div>)
                        })
                    }
                    <button disabled={!Object.values(formData).every(value => value !== "")} type="button" onClick={submit} className="btn btn-dark">Confirmar</button>
                </form>
            </div> 
            }
        </>
    )
        
}

export default CheckoutForm