import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";

const Formulario = ({ crearCita }) => {
  // Crear State de citas
  const [cita, setCita] = useState({
    nombre: "",
    apellido: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores
  const { nombre, apellido, fecha, hora, sintomas } = cita;

  // cuando el usuario presiona agregar cita
  const submitCita = (e) => {
    e.preventDefault();

    // eliminar mensajes previos
    setError(false);

    // Validar
    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }

    // asignar un ID
    cita.id = uuid();
    // crear la cita
    crearCita(cita);

    //reiniciar el form
    setCita({
      nombre: "",
      apellido: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
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
