// Función para obtener datos de la API
async function GetApi() {
    try {
        const response = await fetch('https://681a335b1ac11556350835ab.mockapi.io/data');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error; // Propaga el error para que pueda ser manejado por quien llame a la función
    }
}

// Función para agregar un nuevo héroe
async function agregarHeroe(event) {
    event.preventDefault();
    
    try {
        const nuevoHeroe = {
            personaje: document.getElementById('personaje').value,
            actor: document.getElementById('actor').value,
            edad: document.getElementById('edad').value,
            ubicacion: document.getElementById('ubicacion').value,
            poster: document.getElementById('poster').value,
            fecha: document.getElementById('fecha').value,
            productora: document.getElementById('productora').value
        };

        const response = await fetch('https://681a335b1ac11556350835ab.mockapi.io/data', {
            method: 'POST',
            body: JSON.stringify(nuevoHeroe),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Héroe guardado:", data);
        
        // Aquí puedes agregar lógica después de guardar, como:
        // - Mostrar un mensaje de éxito
        // - Limpiar el formulario
        // - Recargar la lista de héroes
        alert('Héroe guardado con éxito!');
        event.target.reset(); // Limpia el formulario
        
    } catch (error) {
        console.error('Error al guardar el héroe:', error);
        alert('Error al guardar el héroe. Por favor intenta nuevamente.');
    }
}

// Llamar a GetApi al cargar la página (opcional)
document.addEventListener('DOMContentLoaded', () => {
    GetApi().catch(error => console.error('Error inicial:', error));
    
    // Asignar el event listener al formulario
    const formulario = document.querySelector('form');
    if (formulario) {
        formulario.addEventListener('submit', agregarHeroe);
    } else {
        console.error('No se encontró el formulario');
    }
});