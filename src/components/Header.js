export function Header() {

  const header = document.createElement('header');
  header.classList.add('header');
  header.innerHTML = `
    <h1>Pokemon's with Poke Api <small>(Infinite Scroll)</small></h1>
  `;

  return header;

}