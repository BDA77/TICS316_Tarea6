import React from 'react';
import CBoreas from './CBoreas';
import CEmilio from './CEmilio';
import CJaviera from './CJaviera';
import FotoEmilio from './img/Foto Suazo.jpeg';
import FotoBoreas from './img/Foto Boreas.jpeg';
import FotoJavi from "./img/Foto Javi.jpeg";

const PersonalInfo = [{
  name: "Boreas",
  url:"/",
  mail: 'bduchens@alumnos.uai.cl',
  imgSrc: {FotoBoreas}
},
{
  name: "Javiera",
  url:"/",
  mail: 'javiemarin@alumnos.uai.cl',
  imgSrc: {FotoJavi}
},
{
  name: "Emilio",
  url:"/",
  mail: 'emsuazo@alumnos.uai.cl',
  imgSrc: {FotoEmilio}
},
];


function Nosotros() {
  return (
    <main className="content">
      <h2 className="subtitle">¡Conócenos haciendo click en nuestra foto!</h2>
      <div className="subjects">
        <CBoreas />
        <CJaviera />
        <CEmilio />
      </div>
    </main>
  );
  
}

const Integrante = (props) => {
console.log(PersonalInfo[0])
  return (
    <div className="subject">
      <a href={props.props.url}>
        <img src={props.props.imgSrc}/>
      </a>
      <h4>{props.props.name}</h4>
      <p className="mail">{props.props.mail}</p>
    </div>
  );
}

export default Nosotros;

