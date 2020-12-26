import React, {useState} from 'react';
import { getFirestore } from '../firebase';

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [infoCart, setInfoCart] = useState([]);
    const [cantidadAgregada, setCantidadAgregada] = useState(0);
    const [categorias, setCategorias] = useState([]);
    const [total, setTotal] = useState(0)

    const agregarProducto = (productoAgregado) => {
        setInfoCart([...infoCart, productoAgregado]);
        const {cantidad} = productoAgregado;
        setCantidadAgregada(cantidadAgregada + cantidad);
    }

    const guardarOrden = (buyer) => {
        
        let nuevaOrden = {
            buyer: buyer,
            items: infoCart.map( element => {
                const {id, name, price} = element.producto;
                return ({
                    id: id,
                    title: name,
                    price: price,
                    quantity: element.cantidad})
            }),
            date: new Date(),
            total: parseInt(total)
        }

        const db = getFirestore();
        db.collection("Ventas").add(nuevaOrden)
        .then(({id}) => {
            alert(`¡Muchas gracias por tu compra! \n Este es el codigo de seguimiento de tu orden: ${id}`); 
        }).catch( error => {
            alert(`Ha ocurrido un error! \n Detalles: ${error}`);
        }) 
    }

    return <CartContext.Provider value={{infoCart, agregarProducto, cantidadAgregada, categorias, setCategorias, total, setTotal, guardarOrden}}>
        {children}
    </CartContext.Provider>
}