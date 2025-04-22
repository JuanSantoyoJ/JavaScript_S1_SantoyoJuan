let currentId = 1;

async function fetchPokemon(idOrName) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
    const data = await res.json();

    const id = data.id;
    const name = data.name.toLowerCase();

    const gifUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;

    document.getElementById("pokemonImage").src = gifUrl;
    document.getElementById("pokemonName").textContent = name;
    document.getElementById("pokemonId").textContent = `#${id}`;
    currentId = id;
  } catch (err) {
    document.getElementById("pokemonName").textContent = "No encontrado";
    document.getElementById("pokemonImage").src = "";
    document.getElementById("pokemonId").textContent = "";
  }
}

document.getElementById("searchInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const value = e.target.value.trim().toLowerCase();
    if (value) fetchPokemon(value);
  }
});

function getPrevPokemon() {
  fetchPokemon(currentId + 1); 
}

function getNextPokemon() {
  if (currentId > 1) {
    fetchPokemon(currentId - 1);
  }
}


fetchPokemon(currentId);
