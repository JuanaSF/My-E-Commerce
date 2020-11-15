import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from '../ItemCount/ItemCount';

function Item({producto}) {

    const addToCart = (cantProd) => {
        alert(`Cargaste ${cantProd} unidades al carrito`);
    }

    return(
        <div className="col-md-4 p-3">
            <div className="card">
                <img src={producto.img} className="card-img-top" alt="imagen del producto"></img>
                <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">{producto.description}</p>
                <p><strong>Precio: {producto.price}</strong></p>
                <ItemCount initial={1} min={1} max={producto.stock} onAdd={addToCart}/>
                </div>
            </div>
        </div>
    )
}

export default Item;