import React from 'react';
import FotoBoreas from './img/Foto Boreas.jpeg';

const CBoreas = () => {
  return (
    <div className="subject">
      <a href="/integrantes/Boreas">
        <img src={FotoBoreas} alt="Foto Boreas" />
      </a>
      <h4>Boreas Duchens</h4>
      <p className="mail">bduchens@alumnos.uai.cl</p>
    </div>
  );
}

export default CBoreas;
