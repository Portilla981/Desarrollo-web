document.addEventListener("DOMContentLoaded", function () {
  const searchContainer = document.querySelector(".search-bar-container");

  if (searchContainer) {
    fetch("/frontend/public/views/components/search.html")
      .then(response => response.text())
      .then(data => {
        searchContainer.innerHTML = data;
      })
      .catch(error => console.error("Error al cargar search:", error));
  }
});