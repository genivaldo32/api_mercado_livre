function headerComponent() {
  const header = document.createElement("header");
  header.className = "cabecalho";
  header.id = "heaader__component";
  document.body.appendChild(header);

  const titulo = document.createElement("h1");
  titulo.innerText = "Shopping Cart";
  titulo.id = "titulo";
  header.appendChild(titulo);

  const ul = document.createElement("ul");
  const home = document.createElement("li");
  const carrinhoCompras = document.createElement("li");
  const contato = document.createElement("li");

  const linkHome = document.createElement("a");
  const linkCarrinhoCompras = document.createElement("a");
  const linkContato = document.createElement("a");

  linkHome.innerText = "Home";
  linkHome.setAttribute("href", "/index.html");

  linkCarrinhoCompras.innerText = "Carrinho de compras";
  linkCarrinhoCompras.setAttribute("href", "/carrinho.html");

  let compra = 0;
  linkContato.innerText = `Total de gastos: ${compra} `;

  home.appendChild(linkHome);
  carrinhoCompras.appendChild(linkCarrinhoCompras);
  contato.appendChild(linkContato);
  ul.appendChild(home);
  ul.appendChild(carrinhoCompras);
  ul.appendChild(contato);

  header.appendChild(ul);

  return header;
}

console.log(headerComponent());
