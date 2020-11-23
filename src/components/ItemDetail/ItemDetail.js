import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({producto}) {

    const addToCart = (cantProd) => {
        alert(`Cargaste ${cantProd} unidades al carrito`);
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
                    <h5 className="mb-2 text-dark">{producto.price}</h5>
                    <p>Color: {producto.color} <br></br> Unidades Disponibles: {producto.stock}</p>
                    <ItemCount initial={1} min={1} max={producto.stock} onAdd={addToCart}/>
                    <br></br>
                    <a href="#" className="btn btn-primary">Comprar Ahora</a>
                </div>
            </div>
        </div>
        <div className="text-left">
            <span className="text-dark">Descripcion del producto</span>
            <p className="descripcion">{producto.description}</p>
        </div>
        </>
    )
}

export default ItemDetail;