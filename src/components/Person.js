import React from 'react';

const Person = ({ info }) => {
  return (
    <section className="person">
      <div className="personal-info">
        <img src={info.imgSrc} alt={`Foto ${info.name}`} /> 
        <div className="info-text">
          <h2 className="subtitle">{info.name}</h2>
          <p>{'{info.description}'}</p>
        </div>
      </div>
      <h3 className="subtitle">Pasatiempos favoritos:</h3>
      <section className="pasatiempos">
        {info.hobbies.map((hobby, index) => (
          <p className="pasatiempo" key={index}>{hobby}</p>
        ))}
      </section>
    </section>
  );
}

export default Person;
