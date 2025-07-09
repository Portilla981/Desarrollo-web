document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".cards-container");

  if (cardsContainer) {
    fetch("/frontend/public/views/components/cards-home.html")
      .then(response => response.text())
      .then(data => {
        cardsContainer.innerHTML = data;
      })
      .catch(error => console.error("Error al cargar cards:", error));
  }
});