import React, { useState } from 'react';

const style = {
    display: "inline-block",
    marginLeft: "10px",
    marginRight: "10px"
}

function ItemCount({initial, min, max}) {
    let [count, setCount] = useState(initial);

    const sumarUnidad = () => {
        if( count < max ) {
            count++;
            setCount(count);
        }
    }

    const restarUnidad = () => {
        if( count > min) {
            count--;
            setCount(count);
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