import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useContext } from "react";
import { CartContext } from '../../context/CartContext';


function FormCompra() {

    const { guardarOrden } = useContext(CartContext);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const guardarInfoBuyer = (e) => {
        e.preventDefault();
        const buyer = {name, lastName, email, phone};
        guardarOrden(buyer)
    }

    return(
        <div className="container text-left">
            <h1 className="text-dark">Datos Para Confirmar Compra</h1>
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
                <button type="submit" className="btn btn-primary btn-lg">Confirmar Pago!</button>
            </form>
        </div>
    )
}

export default FormCompra;