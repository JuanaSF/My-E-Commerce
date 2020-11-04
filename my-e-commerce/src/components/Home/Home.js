import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';


function Home({greeting}) {
    return(
        <div className="home">
            <div className="header">
                <h1>{greeting}</h1>
                <p className="text-white">
                    Encontra lo que buscas al mejor precio!
                </p>
                <button type="button" className="btn btn-info">Buy now!</button>
            </div>       
        </div>
    )
}

export default Home;