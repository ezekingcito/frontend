const listaPokemon = document.querySelector("#listaPokemon");
const pagination = document.querySelector("#pagination");
const prevPageBtn = document.querySelector("#prevPage");
const nextPageBtn = document.querySelector("#nextPage");
const currentPageSpan = document.querySelector("#currentPage");
const botonesHeader = document.querySelectorAll(".btn-header");

const itemsPerPage = 10;
let currentPage = 1;

const fetchPokemon = async (page) => {
    const startIdx = (page - 1) * itemsPerPage + 1;
    const endIdx = startIdx + itemsPerPage - 1;

    const pokemonData = await Promise.all(
        Array.from({ length: itemsPerPage }, (_, index) => fetchPokemonData(startIdx + index))
    );
    mostrarPokemon(pokemonData);
};

const fetchPokemonData = async (pokemonId) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return response.json();
};

const mostrarPokemon = (pokemones) => {
    pokemones.forEach(poke => {
        console.log("Pokemon:", poke);

        const tipos = poke.types ? poke.types.map(({ type }) => `<p class="${type.name} tipo">${type.name}</p>`).join('') : '';

        let pokeId = poke.id.toString().padStart(3, '0');

        const div = document.createElement("div");
        div.classList.add("pokemon");
        div.innerHTML = `
            <div class="pokemon-imagen">
                <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
            </div>
            <div class="pokemon-info">
                <div class="nombre-contenedor">
                    <p class="pokemon-id">#${pokeId}</p>
                    <h2 class="pokemon-nombre">${poke.name}</h2>
                </div>
                <div class="pokemon-tipos">
                    ${tipos}
                </div>
                <div class="pokemon-stats">
                    <p class="stat">${poke.height}m</p>
                    <p class="stat">${poke.weight}kg</p>
                </div>
            </div>
        `;
        listaPokemon.append(div);
    });
};


botonesHeader.forEach(boton => boton.addEventListener("click", async (event) => {
    const botonId = event.currentTarget.id;

    listaPokemon.innerHTML = "";
    currentPage = 1; // Reset to page 1

    if (botonId === "ver-todos") {
        await fetchPokemon(currentPage);
    } else {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${botonId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const pokemones = data.pokemon.map(pokemon => pokemon.pokemon);
            mostrarPokemon(pokemones);
        } catch (error) {
            console.error('Error fetching Pokemon data:', error);
        }
    }
    updatePagination();
}));

const updatePagination = () => {
    currentPageSpan.textContent = currentPage;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === 16;
};

prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        listaPokemon.innerHTML = "";
        fetchPokemon(currentPage);
        updatePagination();
    }
});

nextPageBtn.addEventListener("click", () => {
    currentPage++;
    listaPokemon.innerHTML = "";
    fetchPokemon(currentPage);
    updatePagination();
});


fetchPokemon(currentPage);
updatePagination();

const sidebarContainer = document.querySelector('.sidebar-container');
const toggleSidebarBtn = document.querySelector('#toggleSidebar');

toggleSidebarBtn.addEventListener('click', () => {
    const currentLeft = parseInt(getComputedStyle(sidebarContainer).left);

    if (currentLeft < 0) {
        sidebarContainer.style.left = '0';
    } else {
        sidebarContainer.style.left = '-200px';
    }
});