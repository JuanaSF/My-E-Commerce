import "bootstrap/dist/css/bootstrap.min.css";
import img from '../../assets/img/remeras.jpg';
import ItemCount from '../ItemCount/ItemCount';

function CardProducto() {

    const addToCart = (cantProd) => {
        alert(`Cargaste ${cantProd} unidades al carrito`);
    }

    return(
        <div className="col-md-4 p-3">
            <div className="card">
                <img src={img} className="card-img-top" alt="imagen del producto"></img>
                <div className="card-body">
                <h5 className="card-title">Remeras!</h5>
                <p className="card-text">Remeras Lisas Mujer Manga Corta Algodón Varios Colores</p>
                <ItemCount initial={1} min={1} max={10} onAdd={addToCart}/>
                </div>
            </div>
        </div>
    )
}

export default CardProducto;