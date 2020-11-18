import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Home from './components/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Home greeting="Bienvenido al E-Commerce!!"/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
