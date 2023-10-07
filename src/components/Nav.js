import React from 'react';

function Nav() {
  return (
    <nav className="nav">
      <a href="/index.html">Inicio</a>
      <div className="submenu">
        <a href="/">Nosotros</a>
        <div className="submenu-content">
          <a href="/">Boreas</a>
          <a href="/">Javiera</a>
          <a href="/">Emilio</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;