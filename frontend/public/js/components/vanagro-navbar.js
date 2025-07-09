document.addEventListener("DOMContentLoaded", function(){
    // Creacion de una constante para almacenar una clase de html y css
    const navbarVanagro = document.querySelector(".navbar-vanagro-container");
    // creacion de funcion condicional frente al elemnto creado
    if(navbarVanagro){
        //busca la ruta de redireccion o de renderizacion
        
        fetch('/frontend/public/views/components/navbar_vanagro.html')
        //promesa
        .then(response => response.text())
        // Accion para anexarse al html segun la variable 
        .then(data => {navbarVanagro.innerHTML = data;})
        // Error si es falso
        .catch(error => console.error("Error de carga el hero", error))           
    }

});