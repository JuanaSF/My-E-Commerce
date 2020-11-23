import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import icono from '../../assets/img/carrito.png';

function CartIcon() {
    return (
        <Link to={`/cart`}>
            <a className="navbar-brand" href="#">
                <img src={icono} width="80" alt="Logo" className="d-inline-block align-top"></img>
            </a>
        </Link>
    );
}

export default CartIcon;