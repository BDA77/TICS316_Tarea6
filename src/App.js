import React from 'react';
import './App.css'; // Importa los estilos CSS aquí

import Header from './components/Header';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Nosotros from './components/Nosotros';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Hero />
      <Nosotros />
      <Footer />
    </div>
  );
}

export default App;
