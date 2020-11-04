import "bootstrap/dist/css/bootstrap.min.css";
import icono from '../../assets/img/bolsa_shopping.png'

function CartIcon() {
    return (
        <a className="navbar-brand" href="#">
            <img src={icono} width="60" height="60" alt="Logo" className="d-inline-block align-top"></img>
        </a>
    );
}

export default CartIcon;