/**
 * TarjetaEstudiante
 * Componente de presentación: recibe los datos únicamente por props
 * y los muestra. No tiene estado propio.
 */
function TarjetaEstudiante({ nombre, carrera }) {
  // Iniciales del nombre para el avatar (ej. "María Quispe" -> "MQ")
  const iniciales = nombre
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((palabra) => palabra[0].toUpperCase())
    .join("");

  return (
    <article className="tarjeta">
      <div className="avatar" aria-hidden="true">
        {iniciales}
      </div>
      <div>
        <h3>{nombre}</h3>
        <p>{carrera}</p>
      </div>
    </article>
  );
}

export default TarjetaEstudiante;
