export function agregarCamper(){
    let ID = prompt("Ingrese el ID del camper:");
    let nombre = prompt("Ingrese el nombre del camper:");
    let apellido = prompt("Ingrese el apellido del camper:");
    let direccion = prompt("Ingrese la direccion del camper:");
    let acudiente = prompt("Ingrese el nombre del acudiente:");
    let telefono = prompt("Ingrese el telefono del camper:");
    let estado = prompt("Ingrese el estado del camper:");
    let ruta = prompt("Ingrese la ruta del camper:");
    let horario = prompt("Ingrese el horario del camper:");
    listaCampers.push({
        "ID": ID,
        "nombre": nombre,
        "apellido": apellido,
        "direccion": direccion,
        "acudiente": acudiente,
        "telefono": telefono,
        "estado": estado,
        "ruta": ruta,
        "horario": horario
    });
    alert("El camper ha sido agregado exitosamente.");
}
let listaCampers = [{
    "ID": "1",
    "nombre": "Juan",
    "apellido": "Santoyo",
    "direccion": "Calle 123",
    "acudiente": "Pedro Santoyo",
    "telefono": "1234567890",
    "estado": "Activo",
    "ruta": "Ruta 1",
    "horario": "8:00 AM - 5:00 PM"},
    {
    "ID": "2",
    "nombre": "Maria",
    "apellido": "Gonzalez",
    "direccion": "Calle 456",
    "acudiente": "Ana Gonzalez",
    "telefono": "0987654321",
    "estado": "Inactivo",
    "ruta": "Ruta 2",
    "horario": "9:00 AM - 6:00 PM"}
];
