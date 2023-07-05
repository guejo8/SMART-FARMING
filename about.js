//----------------------HACER TEXTO DESPLEGABLE--------------------//

let button_readMore = document.getElementById('button_readMore')
let hiddenText = document.getElementById('hiddenText')

button_readMore.addEventListener('click', toggleText);

function toggleText() {
  hiddenText.classList.toggle('show');

  if(hiddenText.classList.contains('show')) {
    button_readMore.innerHTML = 'Leer Menos';
  }else {
    button_readMore.innerHTML = 'Leer Más';
  }
}