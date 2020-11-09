import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home greeting="Bienvenido al E-Commerce!!"/>
    </div>
  );
}

export default App;
