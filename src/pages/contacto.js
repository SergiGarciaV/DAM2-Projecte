﻿import React, { useState } from 'react';
import axios from 'axios';
import LoginModal from '../components/loginModal';
import RegisterModal from '../components/registerModal'; 

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false); // Define las variables de estado necesarias
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMensaje = { nombre, correo, mensaje };
    axios.post('http://localhost:8080/enviar_mensaje', newMensaje)
      .then(response => {
        console.log(response.data);
   
      })
      .catch(error => {
        console.error('Error al enviar mensaje:', error);
      
      });
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SergisWeb--&gt;Contacto</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />
      <link rel="stylesheet" href="../public/css/style.css" />
      <link rel="stylesheet" href="../public/css/styleContacto.css" />

      <section className="contact section-padding">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center text-white pb-5">
                <h2 className="titular">Contacto</h2>
                <div className="deco">
                  <img src="img/deco1.svg" className="deco" />
                </div>
                <label id="garResp">Respuesta garantizada en 24h</label>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mailImg">
        <img src="img/mail.png" className="mailImg" />
      </div>
      
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-4">
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form id="contactForm" className="row g-3" onSubmit={handleSubmit}>
            <div className="col-12">
              <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="col-12">
              <input type="email" className="form-control" id="correoMensaje" name="correoMensaje" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
            </div>
            <div className="col-12">
              <textarea className="form-control" id="mensaje" name="mensaje" rows={5} placeholder="Mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="butForm btn btn-primary">
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="footer text-center py-4">
        <div className="container">
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
        <p className="text-muted m-0">
          &copy; 2024 Sergi's ADVANCED CYBER SECURITY. Todos los derechos reservados.
        </p>
      </footer>
      <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      <script src="js/index.js"></script>
    </div>
  );
}

export default Contacto;
