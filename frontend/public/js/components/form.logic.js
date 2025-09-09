//logica del formulario del proyecto freelancer

// El objetivo es porder manipular los datos que se registren en el fomrulario
// Explicacion a fondo de las siguientes lienas de codigo

// === const formdata = new FormData(form);
// === const data = object.fromEntries(formdata);

// ¿Que significa?
// En JavaScript, la plabra reservada new sirve para crear una nueva instancia de un objeto a partirde una funcion contructora o una clase.

// FormData(form) = [
//     ["Nombre", "Johan Portilla"]
//     ["Telefono", "3106802012"]
//     ["Correo electronico", "jdportilla81@gmail.com"]
//     ["Mensaje", "Hola que tal?, Requiero mas informacion"]
// ]

// Ahora transforma esos datos en un objeto JS, con esta linea de codigo const data = Objet.fromEntries(formdata);

// data = {
//     Nombre: "Johan Portilla",
//     Telefono: "3106802012",
//     Correo: "jdportilla81@gmail.com",
//     Mensaje: "Hola que tal?, Requiero mas informacion"
// } 

// Por ultimo convierte ese objeto JS en un JSON
// {
//     Nombre: "Johan Portilla",
//     Telefono: "3106802012",
//     Correo: "jdportilla81@gmail.com",
//     Mensaje: "Hola que tal?, Requiero mas informacion"

// }

//const {FormData } = required("undici-types")

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

                const response = await fetch("/api/contact",{
                    method: "POST",
                    headers: {"Content-Type": "aplication/json"}, 
                    body: JSON.stringify(data),
                });

                // Verifica si la respuesta es exitosa (codigo 200-299)
                if (response.ok){
                    alert("Mensaje enviado con exito");
                    form.reset();
                }else{
                    alert("Hubo un problema al enviar el mensaje"
                        //notifica de un error en el servidor
                    )
                }

            } catch (error){
                console.error(error);
                alert("Error de conexion");
            }

        });
    };
});