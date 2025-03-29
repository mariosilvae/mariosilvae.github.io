const messages = [ "¡Es hora de salvar el Reino Champiñón!", "¡Yahooo!", "¡Hola, soy Mario!", "¡Es hora de salvar a la princesa!" ]

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function cambiarTexto() {
    const rndInt = randomIntFromInterval(0, 3);
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = messages[rndInt]
}

function mostrarOcultar() {
    const mario = document.getElementById("mario_action");
    const button = document.getElementById("toggleButton");

    if (mario.style.visibility === "hidden") {
        mario.style.visibility = "visible";
        button.textContent = "Ocultar";
    } else {
        mario.style.visibility = "hidden";
        button.textContent = "Mostrar";
    }
}

function agregarEstrella() {
    const contenedor = document.getElementById("contenedor");
    const moneda = document.createElement("img");
    moneda.style.height = "50px"
    moneda.src = "/assets/images/star.jpg";
    moneda.alt = "Estrella";
    contenedor.appendChild(moneda);
}

function cambiarColor() {
    const colores = ["#ff5733", "#33ff57", "#5733ff", "#ffd700", "#ff69b4"];
    document.body.style.background = colores[Math.floor(Math.random() * colores.length)];
}

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-example");
    const details = document.getElementById("php-details");

    toggleButton.addEventListener("click", () => {
        details.classList.toggle("hidden");
        toggleButton.textContent = details.classList.contains("hidden") 
            ? "👀 Ver más detalles" 
            : "👋 Ocultar detalles";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // ✅ Buena UX
    const goodUxButton = document.getElementById("good-ux-button");
    const goodUxFeedback = document.getElementById("good-ux-feedback");

    goodUxButton.addEventListener("click", () => {
        goodUxFeedback.classList.remove("hidden");
        goodUxButton.textContent = "¡Todo está claro!";
    });

    // ❌ Mala UX
    const badUxButton = document.getElementById("bad-ux-button");
    const badUxFeedback = document.getElementById("bad-ux-feedback");

    badUxButton.addEventListener("click", () => {
        badUxFeedback.classList.remove("hidden");
        badUxButton.textContent = "??? Qué pasó?";
    });
});