import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import '../Cart/Cart.css';
import { Link } from "react-router-dom";
import imagen from '../../assets/img/empty-cart.png';

function Cart() {

    const {infoCart, cantidadAgregada} = useContext(CartContext);

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
                                return <ItemCart producto={dato.producto} cantidad={dato.cantidad}/>
                            })}
                            <div className="border-top">
                                <span>Subtotal ({cantidadAgregada} { cantidadAgregada === 1 ? ('producto') : ('productos') }): </span>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Cart;