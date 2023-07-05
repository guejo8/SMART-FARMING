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

  //----------------------MOSTRAR LA FECHA ACTUAL EN LA HOME----------------------------------//

function showDate() {
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const date = new Date();
  const day = days[date.getDay()];
  const dia = date.getDate();
  const hour = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  document.getElementById("fecha_actual").innerHTML = `${day} ${dia} de ${month} del ${year} a las ${hour}:${minutes}`;
}

showDate();

//-------CAMBIAR FOTOS BANNER CUANDO RATON SE POSICIONA ENCIMA Y CUANDO SE RETIRA-------//

let banners = document.getElementsByClassName('banner');

for (let i = 0; i < banners.length; i++) {
  let banner = banners[i];
  
  banner.addEventListener('mouseover', function() {
    this.style.backgroundImage = "url('./imagenes/banner2.jpg')";
  });

  banner.addEventListener('mouseout', function() {
    this.style.backgroundImage = "url('./imagenes/banner.jpg')";
  });
}


