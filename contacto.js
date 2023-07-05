var checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', habilitarBoton);

function habilitarBoton() {
  var boton = document.getElementById('boton');

  if (checkbox && boton) {
    boton.disabled = !checkbox.checked;
  } else {
    console.log('No se encontraron los elementos checkbox y/o boton');
  }
}