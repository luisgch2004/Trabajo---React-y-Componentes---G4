import TarjetaEstudiante from "./TarjetaEstudiante";

/**
 * ListaEstudiantes
 * Recibe el arreglo `estudiantes` por props y renderiza una
 * TarjetaEstudiante por cada registro usando map().
 * Cada elemento lleva una `key` única (el id) para que React
 * actualice la lista de forma eficiente.
 */
function ListaEstudiantes({ estudiantes }) {
  if (estudiantes.length === 0) {
    return (
      <p className="vacio">
        Aún no hay estudiantes. Usa el formulario para agregar el primero.
      </p>
    );
  }

  return (
    <section className="lista" aria-label="Lista de estudiantes">
      {estudiantes.map((estudiante) => (
        <TarjetaEstudiante
          key={estudiante.id}
          nombre={estudiante.nombre}
          carrera={estudiante.carrera}
        />
      ))}
    </section>
  );
}

export default ListaEstudiantes;
