import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function ItemDetail({producto}) {

    const {agregarProducto} = useContext(CartContext);

    const addToCart = (cantProd) => {
        alert(`Cargaste ${cantProd} unidades al carrito`);
        const productoAgregado = { cantidad: cantProd, producto: producto};
        agregarProducto( productoAgregado );
    }

    return (
        <>
        <div className="row">
            <div className="col my-5">
                <img src={producto.img} alt="imagen del producto" width="340px" height="254px"></img>
            </div>
            <div className="col my-5 border-left ">
                <div className="card-body text-left">
                    <h4 className="card-title">{producto.name}</h4>
                    <h5 className="mb-2 text-dark">${producto.price}</h5>
                    <p>Unidades Disponibles: {producto.stock}</p>
                    <ItemCount initial={1} min={1} max={producto.stock} onAdd={addToCart}/>
                </div>
            </div>
        </div>
        <div className="text-left">
            <span className="text-dark subtitle">Descripcion del producto</span>
            <p className="descripcion">{producto.description}</p>
        </div>
        </>
    )
}

export default ItemDetail;