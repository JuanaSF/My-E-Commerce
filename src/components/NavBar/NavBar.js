import "bootstrap/dist/css/bootstrap.min.css";
import './NavBar.css';
import CartIcon from '../CartIcon/CartIcon';

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <CartIcon/>
            <div className="col-auto">
            <a href="#" type="button" className="btn btn-outline-light">Ofertas</a>
            <a href="#" type="button" className="btn btn-outline-light">Productos</a>
            <a href="#" type="button" className="btn btn-outline-light">Nosotros</a>
            <a href="#" type="button" className="btn btn-outline-light">Contacto</a>
            </div>
        </nav>
    )
}

export default NavBar;