import "bootstrap/dist/css/bootstrap.min.css";
import "../Item/Item.css";
import { Link } from 'react-router-dom';

function Item({producto}) {
    return(
        <div className="card card-hotel d-flex flex-column justify-content-between">
            <Link to={`/item/${producto.id}`}>
                <img src={producto.img} className="card-img-top img-card d-block w-100" alt="imagen del producto"></img>
                <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <p className="precio">${producto.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Item;