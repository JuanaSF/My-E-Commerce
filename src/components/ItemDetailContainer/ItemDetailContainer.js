import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import getProduct from '../../lib/product';
import "bootstrap/dist/css/bootstrap.min.css";
import '../ItemDetailContainer/ItemDetailContainer.css'

function ItemDetailContainer() {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        getProduct()
            .then( result => {
                setProducto(result);
                setLoading(false);
            })
    }, []);

    return(
        <div className="padre container">
            <div className="row justify-content-center">
                { loading ? (
                    <div className="spinner-grow text-info" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <ItemDetail producto={producto}/>
                )}
            </div>
        </div>
    )
}

export default ItemDetailContainer;