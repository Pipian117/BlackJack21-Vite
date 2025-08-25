/**
 *
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna la carta
 */
export const pedirCarta = (deck, carta) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  carta = deck.pop();
  return carta;
};
