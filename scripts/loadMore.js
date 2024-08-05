function disableLoadMoreButtons() {
      disableLoad20MoreButton();
      disableLoad100MoreButton();
      disableLoadAllButton();
}

function checkLoadMoreButtons() {
      checkLoad20MoreButton();
      checkLoad100MoreButton();
}

function checkLoad20MoreButton() {
      if (loadCounter + 19 < pokemons.length) {
            enableLoad20MoreButton();
      }
      setTimeout(checkLoad20MoreButton, 300);
}

function checkLoad100MoreButton() {
      if (loadCounter + 99 < pokemons.length) {
            enableLoad100MoreButton();
      }
      setTimeout(checkLoad100MoreButton, 300);
}

function loadAll() {
      let increment = pokemons.length - loadCounter;
      renderCards(increment);
}

function enableLoad20MoreButton() {
      const loadMoreButton = document.getElementById("load-20-more-button");
      loadMoreButton.classList.remove("disabled");
}

function disableLoad20MoreButton() {
      const loadMoreButton = document.getElementById("load-20-more-button");
      loadMoreButton.classList.add("disabled");
}

function enableLoad100MoreButton() {
      const loadMoreButton = document.getElementById("load-100-more-button");
      loadMoreButton.classList.remove("disabled");
}

function disableLoad100MoreButton() {
      const loadMoreButton = document.getElementById("load-100-more-button");
      loadMoreButton.classList.add("disabled");
}

function enableLoadAllButton() {
      const loadMoreButton = document.getElementById("load-all-button");
      loadMoreButton.classList.remove("disabled");
}

function disableLoadAllButton() {
      const loadMoreButton = document.getElementById("load-all-button");
      loadMoreButton.classList.add("disabled");
}
