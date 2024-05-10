import React, { useEffect } from 'react';

function Contacto() {
  useEffect(() => {
    const groc = (element) => {
      element.style.color = '#CFCB29';
    };

    const blanc = (element) => {
      element.style.color = 'white';
    };

    //////////////////////////////////// N A V - B A R ////////////////////////////////////

    document.addEventListener('DOMContentLoaded', function () {
      document.addEventListener('click', function (event) {
        const navbar = document.getElementById('navbarS');
        const toggler = document.querySelector('.navbar-toggler');

        if (!navbar.contains(event.target) && !toggler.contains(event.target)) {
          navbar.classList.remove('show');
        }
      });
    });

    /////////////////////////////////////////// C O N T A C T O ///////////////////////////////////////////

    const parpadear = () => {
      const garResp = document.getElementById('garResp');
      let amarillo = true;

      setInterval(() => {
        if (amarillo) {
          garResp.style.color = '#CFCB29';
        } else {
          garResp.style.color = 'white';
        }
        amarillo = !amarillo;
      }, 550);
    };

    document.addEventListener('DOMContentLoaded', () => {
      parpadear();
    });

    // fin codigo texto parpadeo

    

    ////////////////// CONTACTO / VALIDACIÓN MENSAJE ENVIADO /////////////////////////////

    document.getElementById('contactForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del formulario

      // Recolecta los datos del formulario
      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correoMensaje').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      // Verifica si todos los campos están rellenados
      if (nombre === '' || correo === '' || mensaje === '') {
        alert('Por favor, rellene todos los campos.');
        return; // Detiene el envío del formulario si algún campo está vacío
      }

      // Verifica el formato del correo electrónico
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(correo)) {
        alert('Por favor, introduzca una dirección de correo electrónico válida.');
        return; // Detiene el envío del formulario si el formato del correo electrónico es incorrecto
      }

      // Si todos los campos están rellenados y el formato del correo es correcto, envía los datos al endpoint en tu aplicación Spring Boot
      const formData = new FormData(this);
      fetch('/enviar_mensaje', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            // Maneja la respuesta exitosa
            console.log('Mensaje enviado con éxito');
          } else {
            // Maneja errores de respuesta
            console.error('Error al enviar el mensaje');
          }
        })
        .catch((error) => {
          // Maneja errores de red
          console.error('Error de red:', error);
        });
    });

    //////////////////////////// MULTI-HTML //////////////////////////

    function wordFlick(selector, words, initialWord = '') {
      let part,
        i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 70;

      document.querySelector(selector).textContent = initialWord;

      setInterval(() => {
        if (forwards) {
          if (offset >= words[i].length) {
            ++skip_count;
            if (skip_count == skip_delay) {
              forwards = false;
              skip_count = 0;
            }
          }
        } else {
          if (offset == 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
              i = 0;
            }
          }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
          if (forwards) {
            offset++;
          } else {
            offset--;
          }
        }
        document.querySelector(selector).textContent = part;
      }, speed);
    }

    document.addEventListener('DOMContentLoaded', () => {
      wordFlick('.word', ['No lo dudes', 'Contacta con nosotros', 'Sin compromiso!'], 'Palabra Inicial');
      wordFlick('.word2', ['Otra palabra', 'Más palabras'], 'Somos Expertos en ');
    });

    /////////////////////////// T E A M /////////////////////////////

    var TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      var that = this;
      var delta = 300 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName('txt-rotate');
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement('style');
      css.type = 'text/css';
      css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
      document.body.appendChild(css);
    };

    

    //////////////////////////////////////// N A V - B A R ////////////////////////////////////////////

    document.addEventListener('DOMContentLoaded', function () {
      var navbar = document.getElementById('navbarS');

      // Manejar clics en enlaces dentro del navbar
      navbar.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
          // Cierra el menú
          navbar.classList.remove('show');
        }
      });
    });
  }, []);