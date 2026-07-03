import { obtenerCarrito } from "./storage";
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
})