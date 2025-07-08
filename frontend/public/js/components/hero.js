document.addEventListener("DOMContentLoaded", function(){
    // Creacion de una constante para almacenar una clase de html y css
    const heroElement = document.querySelector(".hero-container");
    // creacion de funcion condicional frente al elemnto creado
    if(heroElement){
        //busca la ruta de redireccion o de renderizacion
        
        fetch('/frontend/public/views/components/hero.html')
        //promesa
        .then(response => response.text())
        // Accion para anexarse al html segun la variable 
        .then(data => {heroElement.innerHTML = data;})
        // Error si es falso
        .catch(error => console.error("Error de carga el hero", error))           
    }

});