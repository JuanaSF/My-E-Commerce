import React, {useState, useEffect, useContext} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import ItemList from '../ItemList/ItemList'
import { getFirestore } from '../../firebase';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function Home({greeting}) {
    const { categorias, setCategorias } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        const db = getFirestore();
        const itemCollection = db.collection("productos");
        const listaReducida = itemCollection.limit(9);
        listaReducida
        .get()
        .then((response) => {
            if(response.size) {
                let aux = response.docs.map( element => {
                    return {...element.data(), id:element.id}
                });
                setProducts(aux);
            }
        });

        const categoryCollection = db.collection("categorias");
        categoryCollection
        .get()
        .then( response => {
            if(response.size) {
                let aux = response.docs.map( element => {
                    return {...element.data()}
                });
                setCategorias(aux);
            }
        })
    }, []);

    return(
        <div className="home">
            <div className="header">
                <h1>{greeting}</h1>
                <p className="text-white">
                    Encontra lo que buscas al mejor precio!
                </p>
                <button type="button" className="btn btn-info">Buy now!</button>
            </div>
            <div className="container">
                {products.length === 0 ? (
                    <div className="spinner-grow text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (<> 
                    <h3>Categorias</h3>
                    {categorias.map( (cat, index )=> {
                        return <div key={index} className="col"><Link to={`/category/${cat.categoriaId}`}>{cat.categoriaId}</Link></div>
                    })}
                    <div className="row">
                        <ItemList productos={products}/>
                    </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Home;