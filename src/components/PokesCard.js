import { fetchPokemons } from "../helpers/fetchPokemons";
import { ShowPokemons } from "../helpers/ShowPokemons";

export async function Pokes(apiURL) {

  let pokes = await fetchPokemons(apiURL);
  let nextApi = pokes.next;
  ShowPokemons(pokes);

  window.addEventListener('scroll', e=> {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    console.log(clientHeight);
    if(scrollTop + clientHeight >= scrollHeight) {
      Pokes(nextApi);
    }
  });

}