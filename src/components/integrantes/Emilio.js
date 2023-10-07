import './App.css';
import Nav from '../Nav';
import Header from '../Header';
import Footer from '../Footer';
import Person from '../Person';
import FotoEmilio from './img/Foto Suazo.jpeg';

const EmilioInfo = {
  name: "Emilio Suazo",
  description:" Emilio nació el 31 de diciembre 2002 en Concepción, cuna del rock y actualmente es estudiante de Ingeniería Civil Industrial e Informática en la Universidad Adolfo Ibáñez.",
  hobbies: ["Perder todo el dia rankeds de LOL", "Andar en cleta"],
  imgSrc: {FotoEmilio}
};

function Emilio() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Person info = {EmilioInfo}/>
      <Footer />
    </div>
  );
}

export default Emilio;

