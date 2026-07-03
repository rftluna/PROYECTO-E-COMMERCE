import {
    guardarCarrito,
    obtenerCarrito,
    vaciarCarritoStorage
} from "./storage.js";

import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
    // USAMOS LA FUNCION QUE PIDE EL CARRITO AL LOCALSTORAGE
    const carrito = obtenerCarrito();
    carrito.push(producto);

    // USAMOS LA FUNCION QUE GUARDA EL CARRITO EN EL LOCALSTORAGE
    guardarCarrito(carrito);

    // USAMOS LA FUNCION UI QUE ACTUALIZA EN NUMERO EN EL CARRITO
    actualizarContador(carrito);
    mostrarMensaje("🎉 Producto agregado 🎉.");
};

export const eliminarProducto = (indice) => {
    const carrito = obtenerCarrito(); //NECESITO RECORRER EL ARRAY DEL LOCALSTORAGE
    // ELIMINA UN ELEMENTO DEL ARRAY
    carrito.splice(indice, 1); // EL ORDEN DE LAS COSAS QUE NECESITA SPLICE: ORDEN Y CANTIDAD

    // ACTUALIZAMOS EL CARRITO EN EL LOCALSTORAGE
    guardarCarrito(carrito);

    //actualizamos el contador
    actualizarContador(carrito);
    mostrarMensaje("❌ Producto eliminado ❌.");
};

export const vaciarCarrito = () => {
    vaciarCarritoStorage();
    actualizarContador([]);
    mostrarMensaje("Carrito vaciado");
};
