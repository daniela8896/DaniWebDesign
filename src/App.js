
import './App.css';
import { Experiencia } from './components/experiencia/Experiencia';
import { Header } from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Clientes from './components/clientes/Clientes'
import Servicios from './components/servicios/Servicios'
import Trabajos from './components/trabajos/Trabajos';
import Testimonios from './components/testimonios/Testimonios';
import { Contacto } from './components/contacto/Contacto';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Servicios />
      <Experiencia />
      <Clientes />
      <Trabajos />
      <Testimonios />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
