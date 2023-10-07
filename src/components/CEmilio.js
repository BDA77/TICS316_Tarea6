import React from 'react';
import FotoEmilio from './img/Foto Suazo.jpeg';

const CEmilio = () => {
  return (
    <div className="subject">
      <a href="/integrantes/Emilio">
        <img src={FotoEmilio} alt="Foto Emilio" />
      </a>
      <h4>Emilio Suazo</h4>
      <p className="mail">emsuazo@alumnos.uai.cl</p>
    </div>
  );
}

export default CEmilio;
