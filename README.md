# Blackjack (Black21) - Vite + Vanilla JS

Juego básico de Black21 (Blackjack) escrito con Vite y Vanilla JavaScript. Proyecto modular, documentado con JSDoc y diseñado siguiendo principios SOLID y Clean Code.

## Características
- Juego de Blackjack mínimo con interacción del jugador y computadora.
- Arquitectura modular (carpeta `src/blackjack/use-cases`).
- Uso de JSDoc para tipos y documentación.
- Buenas prácticas: SOLID y Clean Code.

## Ejecutar el proyecto
1. Instalar dependencias:
   `npm install`
2. Levantar servidor de desarrollo:
   `npm run dev`
3. Compilar:
   `npm run build`
4. Previsualizar build:
   `npm run preview`

Archivos importantes:
- [index.html](index.html)
- [package.json](package.json)
- [src/main.js](src/main.js)
- [src/style.css](src/style.css)

## Estructura y módulos clave
- Entrada de la app: [src/main.js](src/main.js)
- Juego y lógica principal: [src/blackjack/index.js](src/blackjack/index.js)
- Casos de uso (modular):
  - [`crearDeck`](src/blackjack/use-cases/create-deck.js) — crea y mezcla el mazo
  - [`pedirCarta`](src/blackjack/use-cases/give-cart.js) — toma una carta del deck
  - [`valorCarta`](src/blackjack/use-cases/cart-value.js) — calcula valor de la carta
  - [`turnoComputadora`](src/blackjack/use-cases/computer-turn.js) — lógica del turno de la CPU
  - [`crearCartaHTML`](src/blackjack/use-cases/create-cart.js) — crea el elemento <img> de la carta
- Índice de casos de uso: [src/blackjack/use-cases/index.js](src/blackjack/use-cases/index.js)

Assets de cartas:
- [public/assets/cartas](public/assets/cartas) (también disponible en `src/assets/cartas` según cómo empaquetes).

## Principios y buenas prácticas aplicadas
- JSDoc: cada función pública documentada con tipos y descripción (ver archivos en `src/blackjack/use-cases`).
- SOLID: responsabilidades separadas — cada archivo expone una función con una única responsabilidad (SRP).
- Clean Code:
  - Nombres claros (`crearDeck`, `pedirCarta`, `valorCarta`).
  - Manejo explícito de errores (throws en validaciones).
  - Modularidad para facilitar pruebas y mantenimiento.


 
