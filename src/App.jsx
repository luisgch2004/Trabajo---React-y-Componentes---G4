import { useState } from "react";
import FormularioEstudiante from "./components/FormularioEstudiante";
import ListaEstudiantes from "./components/ListaEstudiantes";
import "./App.css";

/**
 * App
 * Componente raíz. Guarda el estado compartido (la lista de estudiantes)
 * y se lo pasa a los hijos:
 *   - al formulario le da la función `agregarEstudiante`
 *   - a la lista le da el arreglo `estudiantes`
 */
function App() {
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: "Ana Torres", carrera: "Psicología" },
    { id: 2, nombre: "Luis Ramírez", carrera: "Ingeniería de Sistemas" },
  ]);

  const agregarEstudiante = ({ nombre, carrera }) => {
    const nuevo = { id: Date.now(), nombre, carrera };
    // Se crea un arreglo nuevo (no se modifica el anterior)
    setEstudiantes((anteriores) => [...anteriores, nuevo]);
  };

  return (
    <main className="app">
      <header>
        <h1>Gestión académica</h1>
        <p>{estudiantes.length} estudiante(s) registrado(s)</p>
      </header>

      <div className="contenido">
        <FormularioEstudiante onAgregar={agregarEstudiante} />
        <ListaEstudiantes estudiantes={estudiantes} />
      </div>
    </main>
  );
}

export default App;
