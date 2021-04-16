import "regenerator-runtime/runtime.js"; // Need it to run async and await syntax
export async function fetchPokemons(apiURL) {
  
  const fetchPokes = await fetch(apiURL);
  const pokes = await fetchPokes.json();

  return pokes;
}
