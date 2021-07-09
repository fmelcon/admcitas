import React from "react";

const Cita = ({ cita }) => {
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
    </div>
  );
};

export default Cita;
