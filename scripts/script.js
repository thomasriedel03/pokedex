async function init() {
      await fetchPokemons("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
      console.log("ersten zwanzig geladen");
      checkLoadMoreButtons();
      renderCards(20);
}

function renderCards(increment) {
      disableLoadMoreButtons();

      loadCounter = loadCounter + increment;
      let cardArea = document.getElementById("card-area");

      for (let cardIndex = loadCounter - increment; cardIndex < loadCounter; cardIndex++) {
            try {
                  cardArea.innerHTML += generateCardHTML(cardIndex);
            } catch (error) {
                  console.log("renderCards error:", error);
            }
            renderTypes(cardIndex);
      }
}

function renderTypes(cardIndex) {
      let typesContainer = document.getElementById(`types-container-${cardIndex}`);
      typesContainer.innerHTML = "";
      let typesArray = pokemons[cardIndex].types;
      for (let typesIndex = 0; typesIndex < typesArray.length; typesIndex++) {
            const typeName = typesArray[typesIndex].type.name;
            typesContainer.innerHTML += generateTypesContainerHTML(typeName);
      }
}
