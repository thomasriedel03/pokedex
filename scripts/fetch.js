const BASE_URL = "https://pokeapi.co/api/v2/";

async function fetchPokemons(path) {
      let currentURLs = await loadData(path);
      nextURL = currentURLs.next;
      console.log(nextURL);
      let URLs = [];
      for (let URLIndex = 0; URLIndex < currentURLs.results.length; URLIndex++) {
            URLs.push(currentURLs.results[URLIndex].url);
      }
      for (let pokemonIndex = 0; pokemonIndex < URLs.length; pokemonIndex++) {
            let pokemon = await loadData(URLs[pokemonIndex]);
            pokemons.push(pokemon);
            console.log("ein Pokemon geladen");
      }

      if (pokemons.length < 200) {
            fetchPokemons(nextURL);
      } else {
            console.log("alle geladen");
            enableLoadAllButton();
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
