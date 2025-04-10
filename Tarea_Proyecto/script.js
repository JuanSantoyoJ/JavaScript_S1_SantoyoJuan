InicioDeTodo = true;
while (InicioDeTodo == true) {
    console.log("-------------------------------------------------")
    console.log("---------  Bienvenidos a Campus Lands -----------")
    console.log("-------------------------------------------------")
    console.log("1. Camper")
    console.log("2. Trainer")
    console.log("3. Coordinador")
    console.log("4. Salir")

    alert("Bienvenidos a Campus Lands");
    let opcion = prompt("Selecciona una opcion:\n 1. Camper\n2. Trainer\n3. Coordinador\n4. Salir");
    Inicio = true;
    while (Inicio == true) {
        if (opcion == 1) {
            alert("Has iniciado como Camper. ");
            camper = true;
            let usuario = prompt("¿Desea registrarse o iniciar sesion:\n1. Registrarse\n2. Iniciar sesion");
            if (usuario == 1) {
                let nombre = prompt("Ingrese su nombre:");
                let apellido = prompt("Ingrese su apellido:");
                let correo = prompt("Ingrese su correo electrónico:");
                let contrasena = prompt("Ingrese su contraseña:");
                
                let datosCamper = {
                    Nombre: nombre,
                    Apellido: apellido,
                    Correo: correo,
                    Contraseña: contrasena
                };

                alert("Registro exitoso, bienvenido a Campus Lands!");
                alert(`Datos del Camper:\nNombre: ${datosCamper.Nombre}\nApellido: ${datosCamper.Apellido}\nCorreo: ${datosCamper.Correo}\nContraseña: ${datosCamper.Contraseña}`);
                console.log("Datos del Camper:");
                console.log(datosCamper);
                InicioCamper = true;
                while (InicioCamper == true) {
                    let opcionCamper = prompt("Selecciona una opcion :\n1. Ver Notas\n2. Ver Estado\n3. Ver Salon\n4. Salir");
                    if (opcionCamper == 1) {
                        alert("Ver Notas");

                    } else if (opcionCamper == 2) {
                        alert("Ver Estado");

                    } else if (opcionCamper == 3) {
                        alert("Ver Salon");

                    } else if (opcionCamper == 4) {
                        alert("Saliendo de la sección Camper...");
                        InicioCamper = false;
                    } else {
                        alert("Opción no válida");
                    }
                }
            } else if (usuario == 2) {
                alert("Iniciando sesion...");
                InicioCamper = true;
                while (InicioCamper == true) {
                    let opcionCamper = prompt("Selecciona una opcion :\n1. Ver Notas\n2. Ver Estado\n3. Ver Salon\n4. Salir");
                    if (opcionCamper == 1) {
                        alert("Ver Notas");

                    } else if (opcionCamper == 2) {
                        alert("Ver Estado");

                    } else if (opcionCamper == 3) {
                        alert("Ver Salon");

                    } else if (opcionCamper == 4) {
                        alert("Saliendo de la sección Camper...");
                        InicioCamper = false;
                    } else {
                        alert("Opción no válida");
                    }
                }
            } else {
                alert("Opción no válida");
            }
            Inicio = false;
        } else if (opcion == 2) {
            alert("Has iniciado como Trainer. ");
            trainer = true;
            Inicio = false;
        } else if (opcion == 3) {
            alert("Has iniciado como Coordinador");
            coordinador = true;
            Inicio = false;
        } else if (opcion == 4) {
            alert("Saliendo del programa...");
            InicioDeTodo = false;
            Inicio = false;
        } else {
            alert("Opción no válida");
            Inicio = false;
        }
    }
}
