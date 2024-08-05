const BASE_URL = "https://pokeapi.co/api/v2/";

async function fetchFive(path) {
      let currentFiveURLs = await loadData(path);
      nextURL = currentFiveURLs.next;
      console.log(nextURL);
      let URLs = [];
      for (let URLIndex = 0; URLIndex < currentFiveURLs.results.length; URLIndex++) {
            URLs.push(currentFiveURLs.results[URLIndex].url);
      }
      for (let pokemonIndex = 0; pokemonIndex < URLs.length; pokemonIndex++) {
            let pokemon = await loadData(URLs[pokemonIndex]);
            pokemons.push(pokemon);
            console.log("ein Pokemon geladen");
      }

      if (pokemons.length < 70) {
            fetchFive(nextURL);
      } else {
            console.log("alle geladen");
      }
}

async function loadData(path = "") {
      try {
            let response = await fetch(path);
            let responseToJSON = await response.json();
            return responseToJSON;
      } catch (error) {
            console.log("loadData error:", error);
      }
}
