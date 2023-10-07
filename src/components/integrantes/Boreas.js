import './App.css';
import Nav from '../Nav';
import Header from '../Header';
import Footer from '../Footer';
import Person from '../Person';
import FotoBoreas from './img/Foto Boreas.jpeg';

const BoreasInfo = {
  name: "Boreas Duchens Arenas",
  description:" Boreas nació el 28 de Enero de 2003 en Santiago y actualmente es estudiante de Ingeniería Civil Industrial e Informática en la Universidad Adolfo Ibáñez.",
  hobbies: ["Jugar Fuchibol", "Jugar videojuegos con amigos"],
  imgSrc: {FotoBoreas}
};

function Boreas() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Person info = {BoreasInfo}/>
      <Footer />
    </div>
  );
}

export default Boreas;
