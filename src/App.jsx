import Header from "./components/Header";

import "./App.css";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState } from "react";

function App() {
const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header 
      numeros={1}
      />
      <div className="mt-12 md:flex">
      <Formulario 
      pacientes={pacientes}
      setPacientes={setPacientes}
      />
      <ListadoPacientes 
      pacientes={pacientes}
      />
      </div>
    </div>
  );
}

export default App;
