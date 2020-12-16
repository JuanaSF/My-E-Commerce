import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from '../../firebase';
import Item from '../Item/Item'

function CategoriaContainer() {

    const { categoriaId } = useParams();
    const [productList, setProductList] = useState([]);

    useEffect(()=> {
        const db = getFirestore();
        const itemcollection = db.collection("productos");
        const productosPorCategoria = itemcollection.where('categoriaId','==', `${categoriaId}`);

        productosPorCategoria
        .get()
        .then( response => {
            if(response.size) {
                let aux = response.docs.map((element) => {
                    return {...element.data(), id:element.id}
                });
                setProductList(aux);
            }
        })
    }, [categoriaId])

    return(
        <>
        <h1 className="text-info">{categoriaId}</h1>
        <div className="row justify-content-center">
            { productList.length === 0 ? (
                <div className="spinner-grow text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                productList.map( producto => {
                    return <Item producto={producto}/>
                })
            ) }
        </div>
        </>
    )
}

export default CategoriaContainer;