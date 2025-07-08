// accion por la cual se realiza la accion de escucha del documento antes de realizar un accion o funcion, resumen del llamado 
document.addEventListener("DOMContentLoaded", function(){
    // Creacion de una constante para almacenar una clase de html y css
    const navbarElement = document.querySelector(".navbar-container");
    // creacion de funcion condicional frente al elemnto creado
    if(navbarElement){
        //busca la ruta de redireccion o de renderizacion
        fetch("/frontend/public/views/components/navbar.html")
        //promesa
        .then(response => response.text())
        // Accion para anexarse al html segun la variable 
        .then(data => {navbarElement.innerHTML = data; 

        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        const navLinks = navbarElement.querySelectorAll(".navbar__link");

        navLinks.forEach(link => {

            if (link.getAttribute("href").includes(currentPage)){
                link.classList.add("active");
            }

        });
    })

    // Error si es falso
    .catch(error => console.error("Error de carga el navbar", error));      
    }

});