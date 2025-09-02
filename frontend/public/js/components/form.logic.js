
// Espera qie el DOM este completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Esto selecciona el formulario con la clase sontact.-form__form
    const form = document.querySelector(".contact-form__form")

    //Verifica que el formulario exista en el DOM
    if(form){
        // Escucha el evento submit del formulario
        form.addEventListener("submit", async (e) => {
            // evita el comportamiento por defecto del navegador de recarga de la pagina
            e.preventDefault();
            
            // convierte los datos en un obejto javascript
            const formdata = new FormData(form); 
            const data = Object.fromEntries(formdata);

            try{

                const response
            }

        });
    };
});