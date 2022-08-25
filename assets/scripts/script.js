const api = ("https://api.mercadolibre.com/sites/MLB/search?q=$QUERY")

fetch(api)
.then((res) => res.json())
.then((res) => console.log(res))