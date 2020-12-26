import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ItemCart({producto, cantidad}) {

    const {quitarProducto} = useContext(CartContext);

    const removeToCart = (producto, cantidad) => {
        quitarProducto(producto, cantidad);
    }

    return(
        <div className="row m-3 border-bottom">
            <div className="col">
                <img src={producto.img} alt="imagen del producto" width="240px" height="154px"></img>
            </div>
            <div className="col">
                <h4>{producto.name}</h4>
                {/* <p>{producto.description}</p> */}
                <p>Cantidad: {cantidad}</p>
                <button type="button" className="btn btn-danger my-3" onClick={() => { removeToCart(producto, cantidad) }}>X Eliminar</button>
            </div>
            <div className="col text-right">
                <h5>${producto.price}</h5>
            </div>
        </div>
    )
}

export default ItemCart;