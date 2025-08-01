
window.addEventListener("load", function () {
  setTimeout(() => {
    const splash = document.getElementById("splash-screen");
    if (splash) splash.style.display = "none";
  }, 3000);
});

let barajas = Array.from({ length: 54 }, (_, i) => i + 1);
let mezcladas = [];
let intervalo;
let index = 0;
let primera = true;

const nombres = [
  "", "El gallo", "El diablito", "La dama", "El catrín", "El paraguas", "La sirena", "La escalera", "La botella",
  "El barril", "El árbol", "El melón", "El valiente", "El gorrito", "La muerte", "La pera", "La bandera",
  "El bandolón", "El violoncello", "La garza", "El pájaro", "La mano", "La bota", "La luna", "El cotorro",
  "El borracho", "El negrito", "El corazón", "La sandía", "El tambor", "El camarón", "Las jaras", "El músico",
  "La araña", "El soldado", "La estrella", "El cazo", "El mundo", "El apache", "El nopal", "El alacrán", "La rosa",
  "La calavera", "La campana", "El cantarito", "El venado", "El sol", "La corona", "La chalupa", "El pino",
  "El pescado", "La palma", "La maceta", "El arpa", "La rana"
];

function barajear() {
  mezcladas = [...barajas].sort(() => Math.random() - 0.5);
  index = 0;
  primera = true;
  detenerJuego();
  mostrarCarta("");
}

function iniciarJuego() {
  if (!mezcladas.length) barajear();
  intervalo = setInterval(() => {
    if (index < mezcladas.length) {
      mostrarCarta(mezcladas[index]);
      index++;
    } else {
      detenerJuego();
    }
  }, 4000);
}

function detenerJuego() {
  clearInterval(intervalo);
}

function mostrarCarta(numero) {
  const contenedor = document.getElementById("cartaActual");
  if (!numero) {
    contenedor.innerHTML = "";
    return;
  }
  const nombre = nombres[numero];
  contenedor.innerHTML = `<div>${nombre}</div><img src="img/${String(numero).padStart(2, '0')}.png" alt="${nombre}" />`;

  let frase = primera ? "Corre y se va con " : "";
  primera = false;

  const mensaje = `${frase}${nombre}`;
  const utterance = new SpeechSynthesisUtterance(mensaje);
  utterance.lang = 'es-MX';
  speechSynthesis.speak(utterance);
}
