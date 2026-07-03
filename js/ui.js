// EN ESTE ARCHIVO VAN A ESTAR LAS FUNCIONES QUE VAN A ACTUALIZAR LAS COSAS QUE SE VEN (VEREMOS DOS)

// 1- FUNCION DE ACTUALIZAR NUMERO EN CARRITO, de productos en la nav

export const actualizarContador = (carrito) => {
    const contador = document.getElementById("contador-carrito");
    if (contador) {
        //SI EXISTE ALGUN NODO QUE RESPONDA A CONTADOR CARRITO
        contador.textContent = carrito.length;
    }
};

// 2- FUNCION DE ALERTS = esta funcion puede servir para cuando agreguen librerias

export const mostrarMensaje = (texto) => {
    alert(texto);
};
