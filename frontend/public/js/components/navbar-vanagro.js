const nav = document.querySelector(".navbar-vanagro"); 
const abrir = document.querySelector(".button-vanagro"); 
const cerrar = document.querySelector(".navbar__button"); 

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// .catch(error => console.error("Error de carga el hero", error))           