const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonGif = document.querySelector('.pokemon__gif');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const buscarPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await APIResponse.json();

    return data;
}
const renderPokemon = async (pokemon) => {
    const data = await buscarPokemon(pokemon);
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonGif.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}
form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(input.value);
    input.value = '';
});