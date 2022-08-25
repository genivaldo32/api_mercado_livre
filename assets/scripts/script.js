window.onload = () => {
  function criaImagem(imageSource) {
    const img = document.createElement("img");
    img.className = "imagem";
    img.src = imageSource;
    return img;
  }

  function criarElemento(element, className, innerText) {
    const el = document.createElement(element);
    el.className = className;
    el.innerText = innerText;
    return el;
  }

  function criarProdutoElemento({ title, name, img, preco }) {
    const section = document.createElement("section");
    section.className = "item";

    section.appendChild(criarElemento("span", "item__title", title));
    section.appendChild(criarElemento("span", "item__name", name));
    section.appendChild(criarElemento("p", "preco", preco));
    section.appendChild(criaImagem(img));
    const button = criarElemento("button", "botao", "Adicione ao carrinho");
    section.appendChild(button);
    return section;
  }

  function buscaProdutos() {
    const api = "https://api.mercadolibre.com/sites/MLB/search?q=$QUERY";
    fetch(api)
      .then((res) => res.json())
      .then((res) => {
        res.results.forEach((produto) => {
          const produtoObjeto = criarProdutoElemento({
            title: produto.id,
            name: produto.title,
            img: produto.thumbnail,
            preco: `R$ ${produto.price}`
          });
          document.querySelector(".items").appendChild(produtoObjeto);
        });
      });
  }

  buscaProdutos();
};
