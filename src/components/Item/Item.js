import "bootstrap/dist/css/bootstrap.min.css";
import "../Item/Item.css";
import { Link } from 'react-router-dom';

function Item({producto}) {
    return(
        <div className="col-md-4 p-3">
            <div className="card">
                <Link to={`/item/${producto.id}`}>
                    <img src={producto.img} className="card-img-top" alt="imagen del producto"></img>
                    <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <p className="precio">${producto.price}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;