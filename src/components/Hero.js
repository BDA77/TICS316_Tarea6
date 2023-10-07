import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <h2 className="subtitle">¿Quiénes somos?</h2>
      <p className="description">Somos 3 aspirantes a ingenieros que esperan lograr el sueño de titularse algún día. Estamos interesados en la informática y es la segunda vez que hacemos una página web, la primera vez fue en Taller de Introducción a la Ingeniería. Estamos motivados con el ramo, pues parece ser más dinámico que el resto. <br /> Más abajo encontrarás información sobre nosotros para que puedas conocernos.</p>
      <h3 className="subtitle">Nuestros objetivos:</h3>
      <section className="goals">
        <p className="goal">Ser fitness</p>
        <p className="goal">Ser felices</p>
        <p className="goal">Pasar el ramo</p>
      </section>
    </section>
  );
}

export default Hero;
