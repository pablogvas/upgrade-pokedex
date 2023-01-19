const listaPokemon$$ = document.querySelector("#pokedex");

// Creo mi función para buscar los pokemons en la API

const getPokemon = async ()=> { 
    for (let i = 1; i < 151; i++) { // Hago un bucle para que recorra los 150 pokemons
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        //console.log(response); 
        const res = await response.json();
        //console.log(res); // res recorre todos los pokemons mostrando por consola todos los atributos, ahora hay que quedarnos con los que queremos
        const pokemon = {
            name: res.name,
            image: res.sprites["front_default"],
            type: res.types.map((type) => type.type.name).join(", "),
            id: res.id
        };
        console.log(pokemon); //Pokemon contiene cada pokemon con los 4 elementos que necesito: name, image, type, id.
        pintarPokemon(pokemon); //Pinto todos mis pokemons en el DOM con sus 4 elementos.
    }
}
// Aqui creo mi función para pintar los pokemons
function pintarPokemon(pokemon) {
    const lista = document.createElement("li");
    lista.className = "lista";
    
    const card = document.createElement("div");
    card.className = "card";

    const nombre = document.createElement("div");
    nombre.className = "card-title";
    nombre.innerHTML = pokemon.name;

    const img = document.createElement("img");
    img.className = "card-image"
    img.src = pokemon.image;

    const cardHeader = document.createElement("div");
    cardHeader.className = "header-card";
    
    const id = document.createElement("div");
    id.className = "id-tarjeta";
    id.innerHTML = pokemon.id;

    const tipo = document.createElement("div");
    tipo.className = "tipo-tarjeta";
    tipo.innerHTML = pokemon.type;

    const contenido = document.createElement("div");
    contenido.className = "card-content";


    card.appendChild(cardHeader);
    cardHeader.appendChild(id);
    cardHeader.appendChild(tipo);
    card.appendChild(contenido);
    contenido.appendChild(img);
    contenido.appendChild(nombre);
    lista.appendChild(card);
    listaPokemon$$.appendChild(lista);
}

const init = async () => {
    const pokemons = await getPokemon();
}
init();
