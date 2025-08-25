import _ from "underscore";

// Esta función crea un nuevo deck

/**
 * Crea un nuevo deck de cartas
 * @param {Array<string>} tiposDeCarta - Tipos de cartas (C, D, H, S)
 * @param {Array<string>} tiposEspeciales - Tipos de cartas especiales (A, J, Q, K)
 * @returns {Array<string>} - Un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error("TiposDeCarta es obligatorio como un arreglo de string");
  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("TiposEspeciales es obligatorio como un arreglo de string");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  console.log(deck);
  deck = _.shuffle(deck);
  return deck;
};
