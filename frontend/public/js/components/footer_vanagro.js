document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.querySelector(".footer-vanagro-container");

  if (footerContainer) {
    fetch("/frontend/public/views/components/footer_vanagro.html")
      .then(response => response.text())
      .then(html => {
        footerContainer.innerHTML = html;
      })
      .catch(error => console.error("Error al carga el footer", error)); 
  }
});
