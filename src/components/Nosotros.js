import React from 'react';

const PersonalInfo = [{
  name: "Boreas Duchens",
  url:"#",
  mail: 'bduchens@alumnos.uai.cl',
  imgSrc: "/Foto Boreas.jpeg"
},
{
  name: "Javiera Marín",
  url:"#",
  mail: 'javiemarin@alumnos.uai.cl',
  imgSrc: "/Foto Javi.jpeg"
},
{
  name: "Emilio Suazo",
  url:"#",
  mail: 'emsuazo@alumnos.uai.cl',
  imgSrc: "/Foto Suazo.jpeg"
},
];


function Nosotros() {
  return (
    <main className="content">
      <h2 className="subtitle">¡Conócenos haciendo click en nuestra foto!</h2>
      <div className="subjects">
      <Integrante props = {PersonalInfo[0]}/>
      <Integrante props = {PersonalInfo[1]}/>
      <Integrante props = {PersonalInfo[2]}/>     
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
