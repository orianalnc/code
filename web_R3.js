!(function() {
  "use strict";


// Modal
var modal = document.getElementById("myModal");
// Elemento que abre el modal
var btn = document.getElementById("myBtn");
// Elemento que cierra el modal
var span = document.getElementsByClassName("close")[0];
//Abrir modal
btn.onclick = function() {
  modal.style.display = "block";
}
//Cerrar modal  al hacer click en X
span.onclick = function() {
  modal.style.display = "none";
}
//Cerrar modal al hacer click en cualquier lugar
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

})();