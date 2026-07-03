//ESTE ARCHIVO VA A UNIFICAR LAS FUNCIONES DE PERSISTENCIA DEL CARRITO
//EN EL LOCAL STORAGE

const KEY = "carrito";

export const guardarCarrito = (carrito) => { //(LO QUE TE ENVIEN)
    // CONVERTIMOS A JSON ANTES DE GUARDAR CON STRINGIFY
    localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => { //FUNCIONA CON LA PERSISTENCIA, NO NECESITA NADA DESDE AFUERA
    return JSON.parse(localStorage.getItem(KEY)) || []; //SE USA RETURN PARA TERMINAR DE HACER ALGO, Y NOS DEVUELVA TAL COSA
};

export const vaciarCarritoStorage = () => {
    localStorage.removeItem(KEY);
};
