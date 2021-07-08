import React, { Fragment } from "react";

const Formulario = () => {
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre del Paciente</label>
        <input
          type="text"
          name="Paciente"
          className="u-full-width"
          placeholder="Nombre del Paciente"
        />
        <label>Apellido del Paciente</label>
        <input
          type="text"
          name="Apellido"
          className="u-full-width"
          placeholder="Apellido del Paciente"
        />
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" />
        <label>Hora del turno</label>
        <input type="time" name="hora" className="u-full-width" />
        <label>Sintomas del Paciente</label>
        <textarea className="u-full-width" name="sintomas"></textarea>
        <button type="submit" className="u-full-width button-primary btnadd">
          {" "}
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
