import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import '../Cart/Cart.css';
import { Link } from "react-router-dom";
import imagen from '../../assets/img/empty-cart.png';

function Cart() {

    const {infoCart, cantidadAgregada, total, setTotal} = useContext(CartContext);

    useEffect(()=>{
        let suma = 0;
        infoCart.map( elemento => {
            suma += (elemento.producto.price * elemento.cantidad);
        });
        
        setTotal(suma);
    }, [infoCart])

    return (
        <div className="fondo">
            <div className="container card-contenedor">
                { cantidadAgregada === 0 ? (
                        <div>
                            <Link to={'/'}>
                                <h2 className='mensaje'>TU CARRITO ESTÁ VACÍO</h2>
                                <img src={imagen}></img>
                                <br></br>
                                <span>Haz click para ver nuestros productos!</span>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="row border-bottom">
                                <h1 className="text-info m-3">Carrito</h1>
                            </div>
                            {infoCart.map( dato => {
                                return <ItemCart key={dato.producto.id} producto={dato.producto} cantidad={dato.cantidad}/>
                            })}
                            <div>
                                <span className="subtotal">Subtotal ({cantidadAgregada} { cantidadAgregada === 1 ? ('producto') : ('productos') }): ${total}</span>
                            </div>
                            <div>
                                <Link to={'/checkout/cart'}>
                                    <button type="button" className="btn btn-primary btn-lg btn-block mt-3">Proceder al Pago</button>
                                </Link>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Cart;