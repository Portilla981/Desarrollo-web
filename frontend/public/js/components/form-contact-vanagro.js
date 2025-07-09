// Limpiar el formulario al hacer clic en "Cancelar"
function cancelarFormulario() {
  document.getElementById("formulario-contacto").reset();
  alert("Formulario cancelado.");
}

// Enviar formulario
document.getElementById("formulario-contacto").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Formulario enviado correctamente.");
  this.reset();
});





















// // accion por la cual se realiza la accion de escucha del documento antes de realizar un accion o funcion, resumen del llamado 
// document.addEventListener("DOMContentLoaded", function () {

//     const navbarElement = document.querySelector(".navbar-vanagro-container");
//     if (navbarElement) {
//         fetch("/frontend/public/views/components/navbar_vanagro.html")
//             .then(response => response.text())
//             .then(data => {
//                 navbarElement.innerHTML = data;
//                 const currentPage = window.location.pathname.split("/").pop() || "index_vanagro.html";
//                 const navLinks = navbarElement.querySelectorAll(".navbar-vanagro__link");
//                 navLinks.forEach(link => {
//                     if (link.getAttribute("href").includes(currentPage)) {
//                         link.classList.add("active");
//                     }
//                 });
//             })
//             .catch(error => console.error("Error de carga el navbar", error));
//     }

// });