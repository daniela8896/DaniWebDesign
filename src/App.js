
import './App.css';

import { themeContext } from "./Context";
import { useContext } from "react";
import Rutas from './components/rutas/Rutas';


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    
    >
      <Rutas />
    </div>
  );
}

export default App;
