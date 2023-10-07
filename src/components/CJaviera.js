import React from 'react';
import FotoJavi from "./img/Foto Javi.jpeg";

const CJaviera = () => {
  return (
    <div className="subject">
      <a href="/integrantes/Javiera">
        <img src={FotoJavi} alt="Foto Javi" />
      </a>
      <h4>Javiera Marín</h4>
      <p className="mail">javiemarin@alumnos.uai.cl</p>
    </div>
  );
}

export default CJaviera;
