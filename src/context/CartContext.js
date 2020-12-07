import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [infoCart, setInfoCart] = useState([]);
    const [cantidadAgregada, setCantidadAgregada] = useState(0);

    const agregarProducto = (productoAgregado) => {
        setInfoCart([...infoCart, productoAgregado]);
        const {cantidad} = productoAgregado;
        setCantidadAgregada(cantidadAgregada + cantidad);
    }

    return <CartContext.Provider value={{infoCart, agregarProducto, cantidadAgregada}}>
        {children}
    </CartContext.Provider>
}