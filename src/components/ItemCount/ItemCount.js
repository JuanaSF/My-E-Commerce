import React, { useState } from 'react';

const style = {
    display: "inline-block",
    marginLeft: "10px",
    marginRight: "10px"
}

function ItemCount({initial, min, max}) {
    const [count, setCount] = useState(initial);

    const sumarUnidad = () => {
        if( count < max ) {
            setCount(count+1);
        }
    }

    const restarUnidad = () => {
        if( count > min) {
            setCount(count-1);
        }
    }

    return(
        <div>
            <button onClick={() => { restarUnidad()}}>-</button>
            <div style={style}><p>{count}</p></div>
            <button onClick={() => { sumarUnidad()}}>+</button>
        </div>
    )
}

export default ItemCount;