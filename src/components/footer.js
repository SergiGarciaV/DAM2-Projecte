
   import React from 'react';
   import { Link } from 'react-router-dom';


   function Footer() {
     return (
    
   <div>
     <div className="contPriv row bg-dark">
       <div className="col-lg-4 col-md-12 col-12">
         <div className="about-img">
           <img src="img/secure.png" className="img-fluid rounded-circle" />
         </div>
       </div>
       <div className="botonesPriv col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
         <a href="#" className="botonFootA julius">PRIVACIDAD Y COOKIES</a>
         <br />
         <br />
         <a href="#" className="botonFootB julius">PROTECCION DE DATOS</a>
         <br />
         <br />
         <a href="contacto.html" className="botonFootC julius">CONTACTO</a>
         <br />
         <br />
         <a href="#" className="botonFootD julius">AYUDA</a>
         <br />
         <br />
       </div>
     </div>
 
     
 
 <footer className="bg-dark p-2 text-center">
   <div className="container">
     <p className="text-white">Sergi's ACS Copyright 2023. sacs.com All Rights Reserved.</p>
   </div>
 </footer>

 </div>

    );
}

export default Footer;