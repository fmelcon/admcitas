import React, { Fragment, useState } from "react";

const Formulario = () => {
  // Crear State de citas
  const [cita, setCita] = useState({
    nombre: "",
    apellido: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores
  const { nombre, apellido, fecha, hora, sintomas } = cita;

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre del Paciente</label>
        <input
          type="text"
          name="nombre"
          className="u-full-width"
          placeholder="Nombre del Paciente"
          onChange={handleChange}
          value={nombre}
        />
        <label>Apellido del Paciente</label>
        <input
          type="text"
          name="apellido"
          className="u-full-width"
          placeholder="Apellido del Paciente"
          onChange={handleChange}
          value={apellido}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />
        <label>Hora del turno</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />
        <label>Sintomas del Paciente</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary btnadd">
          {" "}
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
