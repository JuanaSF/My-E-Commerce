import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import icono from '../../assets/img/carrito.png';
import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';

function CartIcon() {

    const {cantidadAgregada} = useContext(CartContext);

    return (
        <Link to={`/cart`}>
            <a className="navbar-brand" href="#">
                <span>{cantidadAgregada}</span>
                <img src={icono} width="80" alt="Logo" className="d-inline-block align-top"></img>
            </a>
        </Link>
    );
}

export default CartIcon;