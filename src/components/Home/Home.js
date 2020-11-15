import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import getProductsList from '../../lib/data';
import ItemList from '../ItemList/ItemList'

function Home({greeting}) {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        getProductsList()
            .then( result => {
                return JSON.parse(result);
            })
            .then( result => {
                setProducts(result);
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
                <div className="row justify-content-center">
                    {products.length === 0 ? (
                        <div class="spinner-grow text-light" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    ) : (
                        <ItemList productos={products}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;