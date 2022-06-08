// header
let navIcon = document.getElementById("headerNavIcon");
let navCancel = document.getElementById("headerNavCancel");
let headerNav = document.getElementById("headerNav");

navIcon.onclick = () => {
    headerNav.style.display = "block";
    navIcon.style.display = "none";
    navCancel.style.display = "block";
}

navCancel.onclick = () => {
    headerNav.style.display = "none";
    navCancel.style.display = "none";
    navIcon.style.display = "block";
}

// seccion de gestion
class GestionCardsContenido{
    constructor (img, titulo, texto){
        this.img = img
        this.titulo = titulo
        this.texto = texto
    }
}

let card1 = new GestionCardsContenido("negocio.png", "Potencia tu Negocio", "Modernizándote podes aumentar tus ventas, hoy en día la vidriera mas vista es por los medios digitales y un sitio web es la mejo manera para eso");
let card2 = new GestionCardsContenido("apreton.png", "Soporte y Atención", "Trabajamos a la par de nuestros clientes para lograr plasmar sus ideas de la mejor manera y al concluir el proyecto estamos presentes ante cualquier necesidad");
let card3 = new GestionCardsContenido("diseño.png", "Diseño a Medida", "Trabajamos con un diseño a medida con el fin de lograr propuestas en función de las necesidades propuestas por nuestros clientes.");
let card4 = new GestionCardsContenido("pieza-rompecabezas.png", "Todas las Herramientas", "Contamos con todas las herramientas disponibles para afianzar su negocio y lograr la mejor presentación y comunicación con sus clientes");
let card5 = new GestionCardsContenido("seo-1.png", "Search Engine Organic", "El motor de búsqueda orgánico funciona para posicionar los sitios de forma natural en las búsquedas de Google .mediante herramientas sin la necesidad de publicitar");
let card6 = new GestionCardsContenido("actualizacion.png", "Constante Actualización", "Contamos con servicios en los cuales la actualización es permanente para mantener los sitios siempre vigentes y evitar la obsolescencia de ellos");

const arrayCards = [card1, card2, card3, card4, card5, card6];
let gestionCards = document.getElementById("gestionCards");

arrayCards.forEach(card => {
    let cardBody = document.createElement("div");
    cardBody.className = "gestion_card"
    cardBody.innerHTML = `<img class="gestion_card-img" src="assets/img/${card.img}" alt="gestion-icon-negocio">
    <div class="card-body">
        <h3 class="gestion_card-title">${card.titulo}</h3>
        <p class="gestion_card-texto">${card.texto}</p>
    </div>`;
    gestionCards.appendChild(cardBody)
});