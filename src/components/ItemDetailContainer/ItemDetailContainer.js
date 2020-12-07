import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import getProductsList from '../../lib/data';
import "bootstrap/dist/css/bootstrap.min.css";
import '../ItemDetailContainer/ItemDetailContainer.css'

function ItemDetailContainer() {
    const { id } = useParams();

    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        getProductsList()
            .then( result => {
                return JSON.parse(result);
            })
            .then( result => {
                result.forEach((producto) => {
                    if(producto.id === id) {
                        setProducto(producto);
                        setLoading(false);
                    }
                });
            })
    }, [id]);

    return(
        <div className="padre container">
                { loading ? (
                    <div className="spinner-grow text-info" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <ItemDetail producto={producto}/>
                )}
        </div>
    )
}

export default ItemDetailContainer;