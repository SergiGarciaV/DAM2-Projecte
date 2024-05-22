import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../components/loginModal';
import RegisterModal from '../components/registerModal';

function NavBar() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
  
    return (

<div>
      {/* INICI HEADER*/}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a href="#" className="navbar-brand titular">
              <span className="text-primary julius">Sergi's</span> ADVANCED CYBER SECURITY </a>
            {/* Botó navegació desplegable */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarS" arial-controls="navbarS" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarS">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link to="/team" className="nav-link">Nosotros</Link>
                </li>
                <li className="nav-item">
                  <Link to="/servicios" className="nav-link">Servicios</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contacto" className="nav-link">Contacta</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link navbar-button access" onClick={() => setShowLoginModal(true)}>
                    Acceder
                  </button>
                </li>


                <li className="nav-item">
                  <button className="nav-link navbar-button" onClick={() => setShowRegisterModal(true)}>
                    Registrarse
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      

      {/*FI HEADER  */}

</div>
    );
}

export default NavBar;