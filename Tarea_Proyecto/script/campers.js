export function agregarCamper(){
    const ID = prompt("Ingrese el ID del camper:");
    const nombre = prompt("Ingrese el nombre del camper:");
    const apellido = prompt("Ingrese el apellido del camper:");
    const direccion = prompt("Ingrese la direccion del camper:");
    const acudiente = prompt("Ingrese el nombre del acudiente:");
    const telefono = prompt("Ingrese el telefono del camper:");
    const estado = prompt("Ingrese el estado del camper:");
    const ruta = prompt("Ingrese la ruta del camper:");
    const horario = prompt("Ingrese el horario del camper:");
    listaCampers.push({
        ID: ID,
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        acudiente: acudiente,
        telefono: telefono,
        estado: estado,
        ruta: ruta,
        horario: horario
    });
    alert("El camper ha sido agregado exitosamente.");
}
let listaCampers = [];