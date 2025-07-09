// Exportar una funcion llamada loadcards que acepta:
// -containerSelector: un selector css para el contenedor donde van las cards
// -cardIds: Un array es opcional co los IDS de las cards que se quieren mostrar.

export async function loadCards(containerSelector, cardIds = []) {
    // obtenemos el contenedor del dom
    const container = document.querySelector(containerSelector);
    // condicinal de la existencia de la constante en el dom, si no se retorna
    if(!container)return;

    try{
        // intentar, await espere
        const[templeateRest, datosRes] = await Promise.all([
            // Hacer dos fetch al mismo tiempo
            // La primera el la plantilla 
            // La segunda son los datos
            fetch("/frontend/public/views/components/card.html"),
            fetch("/frontend/public/data/cards.json"),

        ]);

        //conertir las repuestas a texto y json
        const template = await templeateRest.text();
        const cards = await datosRes.json();

        // Filtramos las cards si se proporcina los IDs especifcicos
        const filteredCards = cardIds.length? cards.filter(card => cardIds.includes(card.id)) // Solo las que estan en el arreglo 
        :cards; // si no hay filtros utilice todas

        filteredCards.forEach(card => {

            //Remplazar los placeholder con datos reales

            let html = template
            .replace("{{title}}",card.title)
            .replace("{{icon1}}",card.icon1)
            .replace("{{icon2}}",card.icon2)
            .replace("{{description}}",card.description)

            container.innerHTML += html;
            
        });


    }
    catch (error){
        console.error("error cargando las cards")
    }
    
}