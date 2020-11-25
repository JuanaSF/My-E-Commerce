import React, { useState } from 'react';

const style = {
    display: "inline-block",
    marginLeft: "10px",
    marginRight: "10px",
    width: "20px"
}

function ItemCount({initial, min, max, onAdd}) {
    const [count, setCount] = useState(initial);

    const sumarUnidad = () => {
        if( count < max ) {
            setCount(count+1);
        }
    }

    const restarUnidad = () => {
        if( count > min) {
            setCount(count-1);
        }
    }

    const aniadirAlCarrito = ()=> {
        onAdd(count);
    }

    return(
        <>
        <div>
            <button className="btn btn-secondary" onClick={() => { restarUnidad()}}>-</button>
            <div style={style}><p>{count}</p></div>
            <button className="btn btn-secondary" onClick={() => { sumarUnidad()}}>+</button>
        </div>
            <button href="#" className="btn btn-primary my-3">Comprar {count} { count === 1 ? ('Unidad') : ('Unidades') }</button>
            <br></br>
            <button type="button" className="btn btn-info" onClick={() => { aniadirAlCarrito()}}>Añadir al carrito</button>
        </>
    )
}

export default ItemCount;