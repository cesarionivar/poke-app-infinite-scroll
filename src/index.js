import './styles/style.scss';
import { Pokes } from './components/PokesCard';
import { Header } from './components/Header';


const app = document.getElementById('app');

app.appendChild(Header());

const per_page = 78;
const apiURL = `https://pokeapi.co/api/v2/pokemon?limit=${per_page}`;

Pokes(apiURL);
  