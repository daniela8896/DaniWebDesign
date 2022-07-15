
import './App.css';
import { Experiencia } from './components/experiencia/Experiencia';
import { Header } from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Clientes from './components/clientes/Clientes'
import Servicios from './components/servicios/Servicios'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Servicios />
      <Experiencia />
      <Clientes />
    </div>
  );
}

export default App;
