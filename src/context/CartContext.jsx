import { createContext, useContext, useEffect, useState } from 'react';

const cartContext = createContext();

export const { Provider } = cartContext;

export const useCartContext = () => {
    return useContext(cartContext);
};

const CartContextProvider = ({ children }) => {
    const [totalQty, setTotalQty] = useState(0);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        
        if (cart) {
            setCart(cart);
            setTotalPrice(cart.reduce((acc, element) => acc + element.price * element.qty, 0));
            setTotalQty(cart.reduce((acc, element) => acc + element.qty, 0));
        }
    }, [])

    const addToCart = (item, qty) => {
        setTotalQty(totalQty + qty);
        setTotalPrice(totalPrice + item.price * qty);

        let newCart = [];

        if (isInCart(item.id)) {
            newCart = cart.map((elemento) => {
                if (elemento.id === item.id){
                    return {...elemento, qty: elemento.qty + qty};
                } else {
                    return elemento;
                }
            })
        } else {
            newCart = [...cart, { ...item, qty }];
        }

        setCart(newCart)
        setCarToLocalStorage(newCart);
    }

    const setCarToLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const removeItem = (id, price, qty) => {
        setTotalQty(totalQty - qty);
        setTotalPrice(totalPrice - price * qty);

        const newCart = cart.filter((elemento) => elemento.id !== id);

        setCart(newCart);     
        setCarToLocalStorage(newCart);
    }

    const clearCart = () => {
        setCart([]);
        setTotalPrice(0);
        setTotalQty(0);     
        setCarToLocalStorage([]);
    }

    const isInCart = (id) => {
        return cart.find((elemento) => elemento.id === id);
    }

    const contextValue = {
        totalQty,
        addToCart,
        cart,
        removeItem, 
        clearCart,
        totalPrice
    }

    return <Provider value={ contextValue }>{ children }</Provider>
};

export default CartContextProvider;