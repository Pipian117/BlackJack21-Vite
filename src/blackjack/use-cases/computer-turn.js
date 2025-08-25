import { pedirCarta, valorCarta, crearCartaHTML } from "./";
import { showToast } from "./../../ui/toast.js";

/**
 *
 * @param {number} puntosMinimos
 * @param {Array<String>} deck
 * @param {HTMLElement} puntosHTML
 * @param {HTMLElement} divCartasComputadora
 */

export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck = []
) => {
  console.log("[turnoComputadora] invoked", {
    puntosMinimos,
    deckLength: deck?.length,
  });
  if (!deck) throw new Error("Deck es obligatorio");
  if (!puntosHTML) throw new Error("PuntosHTML es obligatorio");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);
    console.debug("[turnoComputadora] carta pedida:", carta);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;
    console.debug("[turnoComputadora] puntosComputadora:", puntosComputadora);

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaHTML(carta);
    divCartasComputadora.append(imgCarta);

    const offset = divCartasComputadora.children.length * 60;
    imgCarta.style.animationDelay = `${offset}ms`;
    imgCarta.classList.add("animate-card");
    imgCarta.addEventListener("animationend", () => {
      imgCarta.classList.remove("animate-card");
      imgCarta.style.animationDelay = "";
      imgCarta.style.opacity = "1";
    });

    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      showToast({
        severity: "info",
        summary: "Empate",
        detail: "Nadie gana :(",
      });
    } else if (puntosMinimos > 21) {
      showToast({
        severity: "warn",
        summary: "Computadora",
        detail: "Computadora gana",
      });
    } else if (puntosComputadora > 21) {
      showToast({
        severity: "success",
        summary: "Jugador",
        detail: "Jugador gana",
      });
    } else {
      showToast({
        severity: "error",
        summary: "Computadora",
        detail: "Computadora gana",
      });
    }
  });
};
