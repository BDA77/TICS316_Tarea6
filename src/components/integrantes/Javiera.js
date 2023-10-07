import './App.css';
import Nav from '../Nav';
import Header from '../Header';
import Footer from '../Footer';
import Person from '../Person';
import FotoJavi2 from '../img/Foto Javi 2.jpg'

const JavieraInfo = {
  name: "Javiera Marín",
  description:" Javiera nació un 17 de septiembre del 2002 en Concepción, ubicado en la región del Bío-Bío, donde vivió toda su infancia hasta los 18 años, cuando tuvo que entrar a la universidad. Actualmente es estudiante de Ingeniería Civil Industrial e Ingeniería Civil Informática en la Universidad Adolfo Ibañez, donde su pasión por aprender la ha llevado lejos. A Javiera no solo le apasiona aprender, sino que también disfruta mucho de enseñar; es por eso que se ha desempeñado de ayudante para distintos ramos dentro de la universidad.",
  hobbies: ["Costura", "Ir al gym", "Cocinar"],
  imgSrc: {FotoJavi2}
};

function Javiera() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Person info = {JavieraInfo}/>
      <Footer />
    </div>
  );
}

export default Javiera;
