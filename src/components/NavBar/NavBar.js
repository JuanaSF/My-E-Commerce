import "bootstrap/dist/css/bootstrap.min.css";
import './NavBar.css';
import CartIcon from '../CartIcon/CartIcon';
import logo from '../../assets/img/bolsa_shopping.png';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark py-0">
            <Link to={`/`}>
                <a className="navbar-brand img-fluid" href="#"><img src={logo}width="70" height="70" className="d-inline-block align-top" alt="" loading="lazy"></img></a>
            </Link>
            <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link enlace mx-3" href="#">Ofertas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link enlace mx-3" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link enlace mx-3" href="#">Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link enlace mx-3" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
            <CartIcon/>
        </nav>
    )
}

export default NavBar;