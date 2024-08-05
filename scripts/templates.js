function generateCardHTML(i) {
      return /*html*/ `
        <div class="card">
            <div class="card-header">
                <h3>#${i + 1}</h3>
                <h3>${pokemons[i].name.charAt(0).toUpperCase()}${pokemons[i].name.slice(1)}</h3>
                <h3 class="whitespace"></h3>
            </div>
            <div class="pokemon-img-container">
                <img class="pokemon-img" src="${pokemons[i].sprites.other["official-artwork"].front_default}">
            </div>
            <div class="types-container" id="types-container-${i}">
                
            </div>
        </div>
    `;
}

function generateTypesContainerHTML(typeName) {
      return /*html*/ `
        <div class="${typeName} type tooltip">
            <span class="tooltiptext">${typeName}</span>
        </div>
    `;
}
