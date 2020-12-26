import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useContext } from "react";
import { CartContext } from '../../context/CartContext';


function FormCompra() {

    const { guardarOrden, total, infoCart } = useContext(CartContext);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const guardarInfoBuyer = (e) => {
        e.preventDefault();
        const buyer = {name, lastName, email, phone};
        guardarOrden(buyer)
    }

    const style = {
        display: "inline-block",
        fontSize: "15px"
    }

    return(
        <div className="container text-left">
            <h1 className="text-info m-3">Datos Para Confirmar Compra</h1>
            <div className="row">
                <div className="col-sm-8">
                    <form onSubmit={guardarInfoBuyer}>
                        <div className="form-row">
                            <div className="form-group col-sm-6">
                                <label for="name">Nombre</label>
                                <input type="text" className="form-control" id="name" placeholder="Ingrese su nombre" onChange={event => { setName(event.target.value) }}></input>
                            </div>
                            <div className="form-group col-sm-6">
                                <label for="lastName">Apellido</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Ingrese su apellido" onChange={event => { setLastName(event.target.value) }}></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-sm-6">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={event => { setEmail(event.target.value) }}></input>
                            </div>
                            <div className="form-group col-sm-6">
                                <label for="phone">Telefono</label>
                                <input type="text" className="form-control" id="phone" placeholder="Ingrese su telefono" onChange={event => { setPhone(event.target.value) }}></input>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg">Realizar Compra!</button>
                    </form>
                </div>
                <div className="col-sm-4">

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title text-dark">Resumen de Compra</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            {infoCart.map( dato => {
                                return (
                                    <li class="list-group-item">
                                        <img src={dato.producto.img} alt="imagen del producto" width="65px" height="65px"></img>
                                        <p style={style}>{dato.producto.name} 
                                        <br></br>{dato.cantidad} { dato.cantidad === 1 ? ('unidad') : ('unidades')} | ${dato.producto.price}</p>
                                    </li>
                                )
                            })}
                        </ul>
                        <div class="card-footer text-danger">
                            <h4>TOTAL: ${total}</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FormCompra;