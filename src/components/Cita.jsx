import PropTypes from "prop-types";
import React from "react";

const Cita = ({ cita, eliminarCita }) => {
  return (
    <div className="cita">
      <p>
        Nombre:<span>{cita.nombre}</span>
      </p>
      <p>
        Apellido:<span>{cita.apellido}</span>
      </p>
      <p>
        Frecha:<span>{cita.fecha}</span>
      </p>
      <p>
        Hora:<span>{cita.hora}</span>
      </p>
      <p>
        Sintomas:<span>{cita.sintomas}</span>
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(cita.id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
};

Cita.propTypes = {
  cita: PropTypes.shape({
    apellido: PropTypes.any,
    fecha: PropTypes.any,
    hora: PropTypes.any,
    id: PropTypes.any,
    nombre: PropTypes.any,
    sintomas: PropTypes.any,
  }),
  eliminarCita: PropTypes.func.isRequired,
};

export default Cita;
