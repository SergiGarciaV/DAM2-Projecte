﻿import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../components/loginModal';
import RegisterModal from '../components/registerModal';
import { Carousel } from 'bootstrap';



function Index() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (

    <div>

      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SergisWeb</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />"
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
      <link rel="stylesheet" href="css/style.css" />
      <div id="root" />
     
      <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} />
      <RegisterModal show={showRegisterModal} onHide={() => setShowRegisterModal(false)} />

      {/*FI HEADER  */}
      {/* CAROUSEL INI */}
      <div id="carouselE" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselE" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselE" data-bs-slide-to={1} aria-current="true" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselE" data-bs-slide-to={2} aria-current="true" aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/1.png" className="d-block w-100" alt />
            <div className="carousel-caption">
              <h5>Informática Forense</h5>
              <p> Elaboración de informe pericial informático y defensa del mismo ante la autoridad judicial. Análisis de
                documentación técnica obrante en autos. Análisis de plagio en sistemas de software informático. Cumplimiento
                de contrato en desarrollo e implantación de sistemas informáticos. Autentificación y certificación de
                correos electrónicos y mensajes de WhatsApp. </p>
              <a href="servicios.html#analisis" className="btn btn-primary mt-3 butMasInfoCarrusel">Mas informacion</a>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="img/2.jpg" className="d-block w-100" alt />
            <div className="carousel-caption">
              <h5>Pentesting / Auditorias</h5>
              <p> -Auditoría LOPD. <br /> -Auditoría ITIL. <br /> -Auditoría de redes. <br /> -Auditoría de seguridad. <br />
              </p>
              <a href="servicios.html#pent" className="btn btn-primary mt-3 butMasInfoCarrusel">Mas informacion</a>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="img/3.jpeg" className="d-block w-100" alt />
            <div className="carousel-caption">
              <h5>Cursos ciber-seguridad</h5>
              <p> El Curso Ciberseguridad te formará en las principales técnicas, herramientas y legislación entorno a la
                seguridad informática. Con él podrás realizar auditorías de seguridad informática y aplicar el hacking ético
                o la ingeniería inversa para hacer frente al malware. </p>
              <a href="servicios.html#cursos" className="btn btn-primary mt-3 butMasInfoCarrusel">Mas informacion</a>
            </div>
          </div>
        </div>
        {/* navegació fletxes carousel */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselE" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Enrere</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselE" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Endavant</span>
        </button>
      </div>
      {/* CAROUSEL FI */}
      <br />
      <div>
        <img src="img/line.svg" className="separador" />
      </div>

      <br />
      <br />
      <br />
      <br />
      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img">
                <img src="img/about.jpeg" className="img-fluid rounded-circle imgIndexA" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="about-text text-white">
                <h1 className="textoRetype">Expertos en Seguridad Integral
                  <span className="txt-rotate" data-period={2000} data-rotate="[ &quot;Análisis forense&quot;, &quot;Pentesting&quot;, &quot;Formación en seguridad&quot;]" />
                </h1>
                <p> Clonado y análisis forense de dispositivos físicos como discos duros y memorias USB. <br /> Recuperación
                  de datos borrados de cualquier dispositivo físico (discos duros, memorias USB, etc.) <br /> Recuperación de
                  mensajes y contenido de dispositivos móviles y de aplicaciones como WhatsApp <br /> Análisis y eliminación
                  del rastro en Internet. <br /> Borrado seguro de información. <br /> Análisis de ficheros informáticos para
                  determinar su integridad o manipulación (fotografías, audios, vídeos, etc). <br /> Análisis forense de
                  correos electrónicos para determinar su integridad o manipulación. <br /> Análisis forense de documentos
                  impresos. <br />
                </p>
                <a href="servicios.html#analisis" className="btn btn-primary">Mas informacion</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <div>
        <img src="img/line.svg" className="separador" />
      </div>
      <section className="services section-padding" id="serv">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center text-white pb-5">
                <h2>Nuestros servicios</h2>
                <p> Nuestros servicios de ciberseguridad se enfocan en resolver las necesidades de los clientes. Sabemos a
                  qué riesgos se exponen y cómo protegerlos </p>
              </div>
            </div>
          </div>
          <div className="row contServ">
            <img src="img/lineCon.png" className="lineCon" />
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-unlock" />
                  <h3 className="card-title">Pentesting</h3>
                  <p className="lead"> El Pentesting es una abreviatura formada por dos palabras “penetration” y “testing” y es
                    una práctica/técnica que consiste en atacar diferentes entornos o sistemas con la finalidad de encontrar
                    y prevenir posibles fallos en el mismo. Diseñado para determinar el alcance de los fallos de seguridad
                    de un sistema y remediarlos. No hay barreras posibles. </p>
                  <a href="servicios.html#pent" className="btn btn-primary mt-3">Mas informacion</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-zoom-in" />
                  <h3 className="card-title">analisis forense</h3>
                  <p className="lead"> Peritos Judiciales Colegiados con la formación y experiencia en todas las disciplinas de
                    la prueba pericial. Nuestra especialización está centrada en la figura del Perito informático judicial,
                    y por ello contamos con los mejores Peritos Judiciales Informáticos expertos en peritaje informático
                    forense, seguridad informática y delitos tecnológicos. </p>
                  <a href="servicios.html#analisis" className="btn btn-primary mt-3">Mas informacion</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-laptop" />
                  <h3 className="card-title">Cursos</h3>
                  <p className="lead"> Los participantes en esta actividad formativa recibirán tras la finalización de la misma
                    el certificado del “Curso de ciberseguridad para directivos y empleados”. Titulación expedida por Bureau
                    Veritas Business School. Dirigido a Directivos, mandos intermedios y profesionales que utilizan
                    dispositivos con acceso a internet y/o a datos. </p>
                  <a href="servicios.html#cursos" className="btn btn-primary mt-3">Mas informacion</a>
                </div>
              </div>
            </div>
          </div>
          <img src="img/lineCon.png" className="lineCon" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <img src="img/line.svg" className="separador" />
        </div>
      </section>
      <section className="portfolio section-padding" id="metodos">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center text-white pb-5">
                <h2>Métodos</h2>
                <p>El uso de los métodos más avanzados y seguros es nuestra prioridad.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <img src="img/lineCon.png" className="lineCon" />
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-light text-center bg-dark pb-2">
                <div className="card-body text-white">
                  <div className="img-area mb-4">
                    <img src="img/m1.png" className="img-fluid" />
                  </div>
                  <h3>Metodología pentesting</h3>
                  <p className="lead"> Si todas las metodologías de pentesting funcionaran igual de bien, sólo se utilizaría una
                    de ellas. Las principales compensaciones entre las pruebas de penetración de caja negra, caja gris y
                    caja blanca son la precisión de la prueba y su velocidad, eficiencia y cobertura. </p>
                  <a href="servicios.html#pent" className="btn btn-primary mt-3">Mas informacion</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-light text-center bg-dark pb-2">
                <div className="card-body text-white">
                  <div className="img-area mb-4">
                    <img src="img/for.jpg" className="img-fluid" />
                  </div>
                  <h3>Análisis Forense</h3>
                  <p className="lead"> Nuestros pilares son: <br />
                    <br /> El uso de métodos científicos. Colección y preservación. Validación. Identificación. Análisis e
                    interpretación. Documentación y presentación. <br /> ISO 27001
                  </p>
                  <a href="servicios.html#analisis" className="btn btn-primary mt-3">Mas informacion</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-light text-center bg-dark pb-2">
                <div className="card-body text-white">
                  <div className="img-area mb-4">
                    <img src="img/m3.jpg" className="img-fluid" />
                  </div>
                  <h3>Formación a empresas</h3>
                  <p className="lead"> Aprenderás las técnicas, estrategias y herramientas más demandadas. <br /> Serás capaz de
                    analizar riesgos legales relacionados con la seguridad en todo tipo de sistemas. <br /> Aprenderás a usar
                    las herramientas más avanzadas en ciberseguridad. </p>
                  <a href="servicios.html#cursos" className="btn btn-primary mt-3">Mas informacion</a>
                </div>
              </div>
            </div>
          </div>
          <img src="img/lineCon.png" className="lineCon" />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <div>
        <img src="img/line.svg" className="separador" />
      </div>
      <section className="team section-padding" id="equipo">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center text-white pb-5">
                <h2>Nuestro equipo</h2>
                <p> Cada uno de los miembros del equipo es experto en un área concreta, sobrepasando los estándares con
                  creces. </p>
              </div>
            </div>
          </div>
          <div className="row">
            <img src="img/lineCon.png" className="lineCon" />
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center bg-dark">
                <div className="card-body text-white">
                  <a href="team.html#pen">
                    <img src="img/equip1.jpg" className="img-fluid rounded-circle" />
                  </a>
                  <h3 className="card-title py-2">Sergi</h3>
                  <p className="card-text"> "El pentester". Siempre a la última, no da tregua a ningún sistema informático. Su
                    lema es: "Si cierran todas las puertas? fabricaré la llave" </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-white mx-1" />
                    <i className="bi bi-facebook text-white mx-1" />
                    <i className="bi bi-linkedin text-white mx-1" />
                    <i className="bi bi-instagram text-white mx-1" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center bg-dark">
                <div className="card-body text-white">
                  <a href="team.html#for">
                    <img src="img/equip2.jpg" className="img-fluid rounded-circle" />
                  </a>
                  <h3 className="card-title py-2">Sara</h3>
                  <p className="card-text">Imparable, voraz, incorrompible. Es nuestra experta en análisis forense. No necesita
                    lupa, la lleva integrada en las orbitas. </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-white mx-1" />
                    <i className="bi bi-facebook text-white mx-1" />
                    <i className="bi bi-linkedin text-white mx-1" />
                    <i className="bi bi-instagram text-white mx-1" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center bg-dark">
                <div className="card-body text-white">
                  <a href="team.html#edu">
                    <img src="img/equip3.png" className="img-fluid rounded-circle" />
                  </a>
                  <h3 className="card-title py-2">Mia</h3>
                  <p className="card-text">Nuestra abogada de cabecera. Conoce las leyes en materia informática de 28 países de
                    "pe" a "pa". Los otros abogados la temen. </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-white mx-1" />
                    <i className="bi bi-facebook text-white mx-1" />
                    <i className="bi bi-linkedin text-white mx-1" />
                    <i className="bi bi-instagram text-white mx-1" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center bg-dark">
                <div className="card-body text-white">
                  <a href="team.html#pen">
                    <img src="img/equip4.jpg" className="img-fluid rounded-circle" />
                  </a>
                  <h3 className="card-title py-2">Joan</h3>
                  <p className="card-text">Experto en redes y sistemas. Su última hazaña? Puso en órbita un satélite, solo
                    necesitó: un colega y un garaje. </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-white mx-1" />
                    <i className="bi bi-facebook text-white mx-1" />
                    <i className="bi bi-linkedin text-white mx-1" />
                    <i className="bi bi-instagram text-white mx-1" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src="img/lineCon.png" className="lineCon" />
        </div>
      </section>
      
    </div>

  );
}

export default Index; 