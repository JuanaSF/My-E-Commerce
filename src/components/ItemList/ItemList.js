import Item from '../Item/Item';

function ItemList({productos}) {
    return(
        <>
        {productos.map((producto)=> {
            return <Item producto={producto}/>
        })}
        </>
    )
}

export default ItemList;