export function ShowPokemons(pokes) {
  
  const { results } = pokes;
  const pokeContainer = document.createElement('section');
  pokeContainer.classList.add('poke-container');  
  const fragment = document.createDocumentFragment();

  results.forEach(pokemon => {
    const { name, url } = pokemon;

    const pokeCard = document.createElement('p');
    pokeCard.textContent = name;

    fragment.appendChild(pokeCard);
  });

  pokeContainer.appendChild(fragment);

  // Insertar en el DOM
  document.getElementById('app').appendChild(pokeContainer);
}