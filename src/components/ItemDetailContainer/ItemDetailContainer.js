import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import "bootstrap/dist/css/bootstrap.min.css";
import '../ItemDetailContainer/ItemDetailContainer.css';
import { getFirestore } from '../../firebase';

function ItemDetailContainer() {
    const { id } = useParams();

    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const db = getFirestore().collection('productos');
        let producto = db.doc(id);
        producto.get().then((response) => {
            setProducto({...response.data(), id: response.id});
            setLoading(false);
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