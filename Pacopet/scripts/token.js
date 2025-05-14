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



async function fetchAnimals(type = '', age = '') {
  let url = 'https://api.petfinder.com/v2/animals?limit=100';
  if (type) {
    url += `&type=${type}`;
  }
  if (age) {
    url += `&age=${age}`;
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const data = await res.json();

  const populares = data.animals.slice(0, 3);
  displayPopularPets(populares);

  const restantes = data.animals.slice(3);
  displayAnimals(restantes);
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

function displayPopularPets(animals) {
  const container = document.getElementById('popularPetsContainer');
  container.innerHTML = '';

  animals.forEach(pet => {
    const imageUrl = pet.photos.length > 0 ? pet.photos[0].medium : 'img/no-image.png';
    const card = `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 border-success">
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
let selectedType = '';
let selectedAge = '';



document.addEventListener('DOMContentLoaded', async () => {
  await getAccessToken();
  await fetchAnimals();

  document.querySelectorAll('.filter-option').forEach(item => {
    item.addEventListener('click', async (e) => {
      selectedType = e.target.getAttribute('data-type');
      document.querySelector('.dropdown-toggle').innerHTML = `<i class="bi bi-heart-pulse-fill me-1"></i> ${e.target.innerText}`;
      await fetchAnimals(selectedType, selectedAge);
    });
  });

  document.querySelectorAll('.age-option').forEach(item => {
    item.addEventListener('click', async (e) => {
      e.preventDefault();
      selectedAge = e.target.getAttribute('data-age');
      document.getElementById('ageFilterButton').innerHTML = `<i class="bi bi-cake2 me-1"></i> ${e.target.innerText}`;
      await fetchAnimals(selectedType, selectedAge);
    });
  });
});
