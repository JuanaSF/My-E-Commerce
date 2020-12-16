function ItemCart({producto, cantidad}) {
    return(
        <div className="row m-3">
            <div className="col">
                <img src={producto.img} alt="imagen del producto" width="340px" height="254px"></img>
            </div>
            <div className="col">
                <h4>{producto.name}</h4>
                {/* <p>{producto.description}</p> */}
                <p>Cantidad: {cantidad}</p>
            </div>
            <div className="col text-right">
                <h5>{producto.price}</h5>
            </div>
        </div>
    )
}

export default ItemCart;