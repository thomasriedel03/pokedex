async function init() {
      await fetchFive("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
      console.log("ersten zehn geladen");
      renderCards();
}

function renderCards() {
      let cardArea = document.getElementById("card-area");
      cardArea.innerHTML = "";
      for (let cardIndex = 0; cardIndex < loadCounter; cardIndex++) {
            try {
                  cardArea.innerHTML += generateCardHTML(cardIndex);
            } catch (error) {
                  console.log("renderCards error:", error);
            }
            renderTypes(cardIndex);
      }
      loadCounter = loadCounter + 20;
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
