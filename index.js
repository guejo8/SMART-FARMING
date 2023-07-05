//------EN SUSCRIPCION A NEWSLETTER,MOSTRAR ALERT CON MENSAJES DIFERENTES SEGUN SELECCION RADIO-----//

const actividadRadios = document.getElementsByName('actividad');

  function mostrarMensaje() {
    let mensaje = '';
    if (actividadRadios[0].checked) {
      mensaje = "Gracias por tu interes :) Haz click en el boton enviar para empezar a recibir en tu correo novedades especiales para autónomos.";
    } else if (actividadRadios[1].checked) {
      mensaje = "Gracias por tu interes :) Haz click en el boton enviar para empezar a recibir en tu correo novedades especiales para gerentes.";
    }
    alert(mensaje);
  }
  actividadRadios.forEach(radio => radio.addEventListener('click', mostrarMensaje));