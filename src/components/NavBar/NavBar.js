import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './NavBar.css';
import CartIcon from '../CartIcon/CartIcon';
import logo from '../../assets/img/bolsa_shopping.png';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function NavBar() {
    const { categorias } = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-lg bg-dark py-0">
            <Link to={`/`}>
                <a className="navbar-brand img-fluid" href="#"><img src={logo}width="70" height="70" className="d-inline-block align-top" alt="" loading="lazy"></img></a>
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link enlace mx-3" href="#">Ofertas</a>
                    </li>
                    <li className="nav-item dropdown">
                        <button className="nav-link btn enlace dropdown-toggle" type="button" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categorias
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {categorias.map( (categoria, index) => {
                                return <Link key={index} to={`/categories/${categoria.categoriaId}`}><span className="dropdown-item">{categoria.categoriaId}</span></Link>
                            })}
                        </div>
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