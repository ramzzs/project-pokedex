const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = "";

var val1 = Math.floor(Math.random()*10);
console.log("Hola "+val1);

if (val1 == 1) {
  searchPokemon = 282;
}else{
  if (val1 == 2 ) {
    searchPokemon = 468;
  }else{
    if (val1 == 3 ) {
      searchPokemon = 3;
    }
    else{
      if (val1 == 4 ) {
        searchPokemon = 445;
      }else{
        if (val1 == 5 ) {
          searchPokemon = 25;
        }else{
          if (val1 == 6) {
            searchPokemon = 282;
          }else{
            if(val1 == 7){
              searchPokemon = 468;
            }else{
              if(val1 == 8){
                searchPokemon = 445;
              }else{
                searchPokemon = 3;
              }
            }
          }
        }
      }
    }
  }
}



const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}


const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Buscando...';
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id;
  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'No TA';
    pokemonNumber.innerHTML = '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
