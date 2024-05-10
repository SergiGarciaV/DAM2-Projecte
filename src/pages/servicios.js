import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../components/loginModal';
import RegisterModal from '../components/registerModal';
function Servicios() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  return (

    <div>
      <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} />
      <RegisterModal show={showRegisterModal} onHide={() => setShowRegisterModal(false)} />

      <section className="contact sectionPaddingA">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center text-white pb-5">
                <h2 className="titular">Servicios</h2>
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
                <h2 className="titularTeam">Un entorno, un servicio</h2>
                <p className="texto">Lorem ipsum dolor sit amet consectetur adipiscing elit egestas blandit nullam taciti,
                  venenatis curabitur cras dictum mi dui sagittis iaculis integer. Congue dapibus vehicula primis class
                  venenatis consequat eget urna, nibh varius pulvinar posuere hendrerit scelerisque sollicitudin a
                  ultrices,
                  erat sed tellus nisi lacinia suspendisse potenti. Ac maecenas facilisi quis libero convallis aptent
                  nisl,
                  auctor lacinia magnis enim mattis diam eget, potenti faucibus dictum nullam blandit at feugiat, pulvinar
                  id
                  lobortis ullamcorper metus molestie. Himenaeos nostra donec viverra torquent purus sapien pellentesque
                  cum
                  dignissim aliquet, feugiat interdum nam nunc bibendum arcu semper ligula et proin, placerat tincidunt
                  nibh
                  urna hendrerit fringilla volutpat sagittis vulputate. Et metus aliquam imperdiet sagittis vel iaculis
                  ornare
                  conubia massa, gravida vehicula proin dis morbi at pharetra cubilia rutrum, consequat mollis cursus
                  volutpat
                  hac velit donec luctus. Ligula ut pretium odio hendrerit facilisi ullamcorper pellentesque mauris
                  nascetur,
                  venenatis lobortis dui maecenas morbi curabitur cum cursus, elementum tincidunt ac aenean interdum
                  commodo
                  proin mi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <img src="img/line.svg" className="separador" />
      </div>
      <section id="pent" className="about section-padding">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center"><br /><br />
                    <h3 className="palabraAnimada">Pen-<br />test<br />ing</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5 row bg-dark contParagB contPriv">
              <div className="about-text text-white">
                <h2><br /><br />PEN-TESTING ART</h2>
                <p className="texto"> <br />Lorem ipsum dolor sit amet consectetur adipiscing elit egestas blandit nullam
                  taciti,
                  venenatis curabitur cras dictum mi dui sagittis iaculis integer. Congue dapibus vehicula primis class
                  venenatis consequat eget urna, nibh varius pulvinar posuere hendrerit scelerisque sollicitudin a
                  ultrices,
                  erat sed tellus nisi lacinia suspendisse potenti. Ac maecenas facilisi quis libero convallis aptent
                  nisl,
                  auctor lacinia magnis enim mattis diam eget, potenti faucibus dictum nullam blandit at feugiat, pulvinar
                  id lobortis ullamcorper metus molestie. Himenaeos nostra donec viverra torquent purus sapien
                  pellentesque
                  cum dignissim aliquet, dictum nullam blandit at feugia, auctor lacinia magnis enim mattis diam eget,
                  potenti faucibus dictum nullam blandit at feugiat, pulvinar
                  id lobortis ullamcorper metus molestie. Himenaeos nostra donec viverra torquent purus sapien
                  pellentesque
                  cum dignissim aliquet, dictum nullam blandit at feugia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <img src="img/line.svg" className="separador" />
      </div>
      <section id="analisis" className="about section-padding">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5 row bg-dark contParagB contPriv contForense">
              <div className="about-text text-white">
                <h2>ANALISIS FORENSE</h2>
                <p className="texto"> Lorem ipsum dolor sit amet consectetur adipiscing elit egestas blandit nullam taciti,
                  venenatis curabitur cras dictum mi dui sagittis iaculis integer. Congue dapibus vehicula primis class
                  venenatis consequat eget urna, nibh varius pulvinar posuere hendrerit scelerisque sollicitudin a
                  ultrices,
                  erat sed tellus nisi lacinia suspendisse potenti. Ac maecenas facilisi quis libero convallis aptent
                  nisl,
                  auctor lacinia magnis enim mattis diam eget, potenti faucibus dictum nullam blandit at feugiat, pulvinar
                  id lobortis ullamcorper metus molestie. Himenaeos nostra donec viverra torquent purus sapien
                  pellentesque
                  cum dignissim aliquet, <br />
                  <br /> Lorem ipsum dolor sit amet consectetur adipiscing elit egestas blandit nullam taciti, venenatis
                  curabitur cras dictum mi dui sagittis iaculis integer. Congue dapibus vehicula primis class venenatis
                  consequat eget urna, nibh varius pulvinar posuere hendrerit scelerisque sollicitudin a ultrices, erat
                  sed
                  tellus nisi lacinia suspendisse potenti. Ac maecenas facilisi quis libero convallis aptent nisl, auctor
                  lacinia magnis enim mattis diam eget, potenti faucibus dictum nullam blandit at feugia
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div className="rot">
                <h3 className="rotate rotateA">Análisis</h3>
                <h3 className="rotate">Forense</h3>
              </div>
            </div>
          </div>
        </div></section>
      <div className="container">
        <img src="img/line.svg" className="separador" />
      </div>
      <section id="cursos" className="about section-padding">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 col-md-12 col-12">
            <h3 className="palabraAnimada">For<br />mac<br />ion</h3>
            </div >
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5 row bg-dark contParagB contPriv">
              <div className="about-text text-white">
                <h2>FORMACION</h2>
                <p className="texto"> Lorem ipsum dolor sit amet consectetur adipiscing elit egestas blandit nullam taciti,
                  venenatis curabitur cras dictum mi dui sagittis iaculis integer. Congue dapibus vehicula primis class
                  venenatis consequat eget urna, nibh varius pulvinar posuere hendrerit scelerisque sollicitudin a
                  ultrices,
                  erat sed tellus nisi lacinia suspendisse potenti. Ac maecenas facilisi quis libero convallis aptent
                  nisl,
                  auctor lacinia magnis enim mattis diam eget, potenti faucibus dictum nullam blandit at feugiat, pulvinar
                  id lobortis ullamcorper metus molestie. Himenaeos nostra donec viverra torquent purus sapien
                  pellentesque
                  cum dignissim aliquet, <br />
                  <br /> Lorem ipsum dolor sit amet consectetur adipiscing elit egestas blandit nullam taciti, venenatis
                  curabitur cras dictum mi dui sagittis iaculis integer. Congue dapibus vehicula primis class venenatis
                  consequat eget urna, nibh varius pulvinar posuere hendrerit scelerisque sollicitudin a ultrices, erat
                  sed
                  tellus nisi lacinia suspendisse potenti. Ac maecenas facilisi quis libero convallis
                </p>
              </div>
            </div>
          </div >
        </div >
      </section >
            {/*Footer  */}

      <section className="containerPriv dataPriv about section-padding">
      
      </section>
    
    </div >
  );
}

export default Servicios;