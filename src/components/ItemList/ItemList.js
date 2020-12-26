import Item from '../Item/Item';

function ItemList({productos}) {
    return(
        <>
        {productos.map((producto)=> {
            return <Item key={producto.id} producto={producto}/>
        })}
        </>
    )
}

export default ItemList;