﻿import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../components/loginModal';
import RegisterModal from '../components/registerModal';

function Team() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  return (

    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SergisWeb--&gt;Team</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />"
      <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
      <link rel="stylesheet" href="../src/assets/css/style.css" />
      <link rel="stylesheet" href="../src/assets/css/styleTeam.css" />
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a href="#" className="navbar-brand titular">
              <span className="text-primary">Sergi's</span> ADVANCED CYBER SECURITY </a>
            {/* Bot  navegaci  desplegable */}
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
                  <Link to="/contacto" className="nav-link">Contacto</Link>
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

      <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} />
      <RegisterModal show={showRegisterModal} onHide={() => setShowRegisterModal(false)} />

      {/*FI HEADER  */}

      <section className="contact sectionPaddingA">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center text-white pb-5">
                <h2 className="titular">Team</h2>
                <div className="deco">
                  <img src="img/deco1.svg" className="deco" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about section-padding">
        <div className="teamTextInicial">
          <div className="container">
            <div className="contPriv row bg-dark">
              <div>
                <h2 className="titularTeam">Pasión por la Seguridad</h2>
                <p className="texto">Lorem ipsum dolor sit amet consectetur adipiscing elit egestas blandit nullam taciti,
                  venenatis curabitur cras dictum mi dui sagittis iaculis integer. Congue dapibus vehicula primis class
                  venenatis consequat eget urna, nibh varius pulvinar posuere hendrerit scelerisque sollicitudin a ultrices,
                  erat sed tellus nisi lacinia suspendisse potenti. Ac maecenas facilisi quis libero convallis aptent nisl,
                  auctor lacinia magnis enim mattis diam eget, potenti faucibus dictum nullam blandit at feugiat, pulvinar
                  id
                  lobortis ullamcorper metus molestie. Himenaeos nostra donec viverra torquent purus sapien pellentesque cum
                  dignissim aliquet, feugiat interdum nam nunc bibendum arcu semper ligula et proin, placerat tincidunt nibh
                  urna hendrerit fringilla volutpat sagittis vulputate. Et metus aliquam imperdiet sagittis vel iaculis
                  ornare
                  conubia massa, gravida vehicula proin dis morbi at pharetra cubilia rutrum, consequat mollis cursus
                  volutpat
                  hac velit donec luctus. Ligula ut pretium odio hendrerit facilisi ullamcorper pellentesque mauris
                  nascetur,
                  venenatis lobortis dui maecenas morbi curabitur cum cursus, elementum tincidunt ac aenean interdum commodo
                  proin mi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <img src="img/line.svg" className="separador" />
      </div>
      <section id="pen" className="about section-padding">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img">
                <img src="img/teamA.png" className="img-fluid  imgIndexA" />
              </div>
              <div className="letter-imageA">
                <a href="contacto.html">
                  <div className="animated-mail">
                    <div className="back-fold" />
                    <div className="letter">
                      <div className="letter-border" />
                      <div className="letter-title" />
                      <div className="letter-context" />
                      <div className="letter-stamp">
                        <div className="letter-stamp-inner" />
                      </div>
                    </div>
                    <div className="top-fold" />
                    <div className="body" />
                    <div className="left-fold" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5 row bg-dark contParagB contPriv">
              <div className="about-text text-white">
                <h1 className="textoRetype">The Man with the Keys
                  <span className="txt-rotate" data-period="2000" data-rotate='["the keys", "access", "knowledge"]' />
                </h1>
                <p className="texto"> Lorem ipsum dolor sit amet consectetur adipiscing elit egestas blandit nullam taciti,
                  venenatis curabitur cras dictum mi dui sagittis iaculis integer. Congue dapibus vehicula primis class
                  venenatis consequat eget urna, nibh varius pulvinar posuere hendrerit scelerisque sollicitudin a ultrices,
                  erat sed tellus nisi lacinia suspendisse potenti. Ac maecenas facilisi quis libero convallis aptent nisl,
                  auctor lacinia magnis enim mattis diam eget, potenti faucibus dictum nullam blandit at feugiat, pulvinar
                  id lobortis ullamcorper metus molestie. Himenaeos nostra donec viverra torquent purus sapien pellentesque
                  cum dignissim aliquet, <br />
                  <br /> Lorem ipsum dolor sit amet consectetur adipiscing elit egestas blandit nullam taciti, venenatis
                  curabitur cras dictum mi dui sagittis iaculis integer. Congue dapibus vehicula primis class venenatis
                  consequat eget urna, nibh varius pulvinar posuere hendrerit scelerisque sollicitudin a ultrices, erat sed
                  tellus nisi lacinia suspendisse potenti. Ac maecenas facilisi quis libero convallis aptent nisl, auctor
                  lacinia magnis enim mattis diam eget, potenti faucibus dictum nullam blandit at feugia
                </p>
                <a href="servicios.html#pent" className="btn btn-primary">Especialidad</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <img src="img/line.svg" className="separador" />
      </div>
      <section id="for" className="about section-padding">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5 row bg-dark contParagB contPriv">
              <div className="about-text text-white">
                <img src="img/lupa.png" className="lupa" />
                <h1 className="textoRetype">The Woman of Details
                  <span className="txt-rotate" data-period={2000} data-rotate="[ &quot;details&quot;, &quot;no horizon&quot;, &quot;full view&quot;]" />
                </h1>
                <p className="texto"> Lorem ipsum dolor sit amet consectetur adipiscing elit egestas blandit nullam taciti,
                  venenatis curabitur cras dictum mi dui sagittis iaculis integer. Congue dapibus vehicula primis class
                  venenatis consequat eget urna, nibh varius pulvinar posuere hendrerit scelerisque sollicitudin a ultrices,
                  erat sed tellus nisi lacinia suspendisse potenti. Ac maecenas facilisi quis libero convallis aptent nisl,
                  auctor lacinia magnis enim mattis diam eget, potenti faucibus dictum nullam blandit at feugiat, pulvinar
                  id lobortis ullamcorper metus molestie. Himenaeos nostra donec viverra torquent purus sapien pellentesque
                  cum dignissim aliquet, <br />
                  <br /> Lorem ipsum dolor sit amet consectetur adipiscing elit egestas blandit nullam taciti, venenatis
                  curabitur cras dictum mi dui sagittis iaculis integer. Congue dapibus vehicula primis class venenatis
                  consequat eget urna, nibh varius pulvinar posuere hendrerit scelerisque sollicitudin a ultrices, erat sed
                  tellus nisi lacinia suspendisse potenti. Ac maecenas facilisi quis libero convallis aptent nisl, auctor
                  lacinia magnis enim mattis diam eget, potenti faucibus dictum nullam blandit at feugia
                </p>
                <a href="servicios.html#analisis" className="btn btn-primary">Especialidad</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img">
                <img src="img/teamB.png" className="img-fluid  imgIndexB" />
              </div>
              <div className="letter-imageB">
                <a href="contacto.html">
                  <div className="animated-mail">
                    <div className="back-fold" />
                    <div className="letter">
                      <div className="letter-border" />
                      <div className="letter-title" />
                      <div className="letter-context" />
                      <div className="letter-stamp">
                        <div className="letter-stamp-inner" />
                      </div>
                    </div>
                    <div className="top-fold" />
                    <div className="body" />
                    <div className="left-fold" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <img src="img/line.svg" className="separador" />
      </div>
      <section id="edu" className="about section-padding">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img">
                <img src="img/teamC.png" className="img-fluid  imgIndexC" />
              </div>
              <div className="letter-imageC">
                <a href="contacto.html">
                  <div className="animated-mail">
                    <div className="back-fold" />
                    <div className="letter">
                      <div className="letter-border" />
                      <div className="letter-title" />
                      <div className="letter-context" />
                      <div className="letter-stamp">
                        <div className="letter-stamp-inner" />
                      </div>
                    </div>
                    <div className="top-fold" />
                    <div className="body" />
                    <div className="left-fold" />
                  </div>
                </a></div><a href="contacto.html">
              </a>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5 row bg-dark contParagB contPriv">
              <div className="about-text text-white">
                <img src="img/books.png" className="books" />
                <h1 className="textoRetype">The Law of the bits
                  <span className="txt-rotate" data-period={2000} data-rotate="[ &quot;technologies&quot;, &quot;the internet&quot;, &quot;the network&quot;, &quot;the Universe&quot;]" />
                </h1>
                <p className="texto"> Lorem ipsum dolor sit amet consectetur adipiscing elit egestas blandit nullam taciti,
                  venenatis curabitur cras dictum mi dui sagittis iaculis integer. Congue dapibus vehicula primis class
                  venenatis consequat eget urna, nibh varius pulvinar posuere hendrerit scelerisque sollicitudin a ultrices,
                  erat sed tellus nisi lacinia suspendisse potenti. Ac maecenas facilisi quis libero convallis aptent nisl,
                  auctor lacinia magnis enim mattis diam eget, potenti faucibus dictum nullam blandit at feugiat, pulvinar
                  id lobortis ullamcorper metus molestie. Himenaeos nostra donec viverra torquent purus sapien pellentesque
                  cum dignissim aliquet, <br />
                  <br /> Lorem ipsum dolor sit amet consectetur adipiscing elit egestas blandit nullam taciti, venenatis
                  curabitur cras dictum mi dui sagittis iaculis integer. Congue dapibus vehicula primis class venenatis
                  consequat eget urna, nibh varius pulvinar posuere hendrerit scelerisque sollicitudin a ultrices, erat sed
                  tellus nisi lacinia suspendisse potenti. Ac maecenas facilisi quis libero convallis aptent nisl, auctor
                  lacinia magnis enim mattis diam eget, potenti faucibus dictum nullam blandit at feugia
                </p>
                <a href="servicios.html#cursos" className="btn btn-primary">Especialidad</a>
              </div>
            </div>
          </div>
        </div>
      </section>
 
    </div>
  );
}

export default Team;