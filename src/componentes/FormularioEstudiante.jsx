import { useState } from "react";

/**
 * FormularioEstudiante
 * Captura el nombre y la carrera. Mantiene su propio estado local (inputs
 * controlados) y, al enviar, avisa al componente padre mediante la prop
 * `onAgregar` (comunicación hijo -> padre).
 */
function FormularioEstudiante({ onAgregar }) {
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");
  const [error, setError] = useState("");

  const manejarEnvio = (evento) => {
    evento.preventDefault(); // evita que la página se recargue

    if (nombre.trim() === "" || carrera.trim() === "") {
      setError("Completa el nombre y la carrera para registrar al estudiante.");
      return;
    }

    onAgregar({ nombre: nombre.trim(), carrera: carrera.trim() });

    // Se limpia el formulario después de registrar
    setNombre("");
    setCarrera("");
    setError("");
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio} noValidate>
      <h2>Registrar estudiante</h2>

      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        type="text"
        placeholder="Ej. María Quispe"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <label htmlFor="carrera">Carrera</label>
      <input
        id="carrera"
        type="text"
        placeholder="Ej. Ingeniería de Sistemas"
        value={carrera}
        onChange={(e) => setCarrera(e.target.value)}
      />

      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}

      <button type="submit">Agregar estudiante</button>
    </form>
  );
}

export default FormularioEstudiante;
