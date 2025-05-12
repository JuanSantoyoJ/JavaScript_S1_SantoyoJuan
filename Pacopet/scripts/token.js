const clientId = 'eFLFoDJJkBQ5EOVaEgcCY1EYsYNgijXszmKHPsXFJZ38LGMpMI';
const clientSecret = '25t1hAFdbNXkdnutHGuOLEPugNxrhO4UruhBr6RP';
let accessToken = '';

async function getAccessToken() {
    const url = 'https://api.petfinder.com/v2/oauth2/token';
    const body = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    });

    const data = await res.json();
    console.log(data)
    accessToken = data.access_token;
}



async function fetchAnimals() {
    const res = await fetch('https://api.petfinder.com/v2/animals?limit=100', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    const data = await res.json();
    displayAnimals(data.animals);
}





function displayAnimals(animals) {
    const container = document.getElementById('petsContainer');
    container.innerHTML = '';

    animals.forEach(pet => {
        const imageUrl = pet.photos.length > 0 ? pet.photos[0].medium : 'img/no-image.png';
        const card = `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card h-100">
            <img src="${imageUrl}" class="card-img-top" alt="${pet.name}">
            <div class="card-body">
              <h5 class="card-title">${pet.name}</h5>
              <p class="card-text">${pet.species} - ${pet.breeds.primary || 'Unknown'}</p>
              <p class="card-text"><small class="text-muted">${pet.age} • ${pet.contact.address.city || 'Unknown'}</small></p>
              <a href="#" class="btn btn-success w-100">View Details</a>
            </div>
          </div>
        </div>
      `;

        container.innerHTML += card;
    });
}




document.addEventListener('DOMContentLoaded', async () => {
    await getAccessToken();
    await fetchAnimals();
  });
  