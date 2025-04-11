import * as campers from './campers.js';
import * as menus from './menus.js';
import * as trainers from './trainers.js';

menus.menuInicio();
let usuario = prompt("Ingrese el tipo de usuario:");
if (usuario == 1) {
    menus.menuCamper();
    let opcCamper = prompt("Seleccione una opcion:");
    if (opcCamper == 1) {
    }
} else if (usuario == 2) {
    menus.menuTrainer();
} else if (usuario == 3) {
    menus.menuCoordinador();
    let opcCoordinador = prompt("Seleccione una opcion:");
    if (opcCoordinador == 4) {
        let camperData = campers.agregarCamper();
        listaCampers.push(camperData);
    }
}