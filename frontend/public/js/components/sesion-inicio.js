document.addEventListener("DOMContentLoaded", function(){
    
    const sesionElement = document.querySelector(".inicio-sesion-container");    
    if(sesionElement){        
        fetch('/frontend/public/views/components/inicio-sesion.html')    
        .then(response => response.text())    
        .then(data => {sesionElement.innerHTML = data;})    
        .catch(error => console.error("Error de carga el hero", error))           
    }
});