import recipes from "./data";
import createTag from "./createTags";
let allAppareil = [];
let allIngredients = [];
let allUstensils = [];

function autocomplete() {
  const ingredientInput = document.getElementById("ingredients-input");
  const appareilsInput = document.getElementById("appareils-input");
  const ustensilesInput = document.getElementById("ustensiles-input");
  const IngredientsList = document.querySelector("#selected-ingredients");
  const AppareilsList = document.querySelector("#selected-appareils");
  const UstensilesList = document.querySelector("#selected-ustensiles");
  recipes.filter((recipe) => {
    recipe.ingredients.map((ingredient) => {
      allIngredients.push(ingredient.ingredient.toLowerCase());
    });
    allAppareil.push(recipe.appliance.toLowerCase());
    recipe.ustensils.map((item) => {
      allUstensils.push(item.toLowerCase());
    });
  });

  // Enter key words in ingredients input and get tags:
  const filteredIngredients = allIngredients.filter(function (ele, pos) {
    return allIngredients.indexOf(ele) == pos;
  });
  ingredientInput.addEventListener("keyup", function (e) {
    IngredientsList.innerHTML = "";
    let ingredientArray = [];
    if (e.target.value) {
      ingredientArray = filteredIngredients.filter((ingredient) =>
        ingredient.toLowerCase().includes(e.target.value)
      );
      ingredientArray = ingredientArray.map(
        (ingredient) => `<li>${ingredient}</li>`
      );
      autocompleteIngredientArray(ingredientArray);
    }
    if (e.key === "Enter") {
      const tagContainer = document.querySelector(".tags");
      const ingredientInputValue = document.getElementById("ingredients-input");
      let InputTag = document.createElement("div");
      InputTag.className = "tag-input";
      InputTag.innerHTML = `<span>${ingredientInputValue.value}</span><span class="close-tag">&#215</span>`;
      InputTag.dataType = "ingredient";
      InputTag.classList.add("ingredient");
      tagContainer.appendChild(InputTag);
      document.querySelector(".close-tag").addEventListener("click", (e) => {
        InputTag.style.display = "none";
      });
    }
  });

  function autocompleteIngredientArray(ingredientArray) {
    IngredientsList.innerHTML = !ingredientArray.length
      ? ""
      : ingredientArray.join("");
  }

  // Enter key words in appareils input and get tags:
  const filteredAppareil = allAppareil.filter(function (ele, pos) {
    return allAppareil.indexOf(ele) == pos;
  });
  appareilsInput.addEventListener("keyup", function (e) {
    AppareilsList.innderHTML = "";
    let appareilArray = [];

    if (e.target.value) {
      appareilArray = filteredAppareil.filter((appareil) =>
        appareil.toLowerCase().includes(e.target.value)
      );
      appareilArray = appareilArray.map((appareil) => `<li>${appareil}</li>`);

      autocompleteAppareilArray(appareilArray);
      console.log(appareilArray);
    }
    if (e.key === "Enter") {
      const tagContainer = document.querySelector(".tags");
      const appareilInputValue = document.getElementById("appareils-input");
      let InputTag = document.createElement("div");
      InputTag.className = "tag-input";
      InputTag.innerHTML = `<span>${appareilInputValue.value}</span><span class="close-tag">&#215</span>`;
      InputTag.dataType = "appareils";
      InputTag.classList.add("appareils");
      tagContainer.appendChild(InputTag);
      document.querySelector(".close-tag").addEventListener("click", (e) => {
        InputTag.style.display = "none";
      });
    }
  });

  function autocompleteAppareilArray(appareilArray) {
    AppareilsList.innerHTML = !appareilArray.length
      ? ""
      : appareilArray.join("");
  }

  // Enter key words in ustensils input:
  const filteredUstensils = allUstensils.filter(function (ele, pos) {
    return allUstensils.indexOf(ele) === pos;
  });
  ustensilesInput.addEventListener("keyup", function (e) {
    let ustensileArray = [];
    if (e.target.value) {
      ustensileArray = filteredUstensils.filter((ustensile) =>
        ustensile.toLowerCase().includes(e.target.value)
      );
      ustensileArray = ustensileArray.map(
        (ustensile) => `<li>${ustensile}</li>`
      );

      autocompleteUstensileArray(ustensileArray);
      console.log(ustensileArray);
    }
    if (e.key === "Enter") {
      const tagContainer = document.querySelector(".tags");
      const ustensilInputValue = document.getElementById("ustensiles-input");
      let InputTag = document.createElement("div");
      InputTag.className = "tag-input";
      InputTag.innerHTML = `<span>${ustensilInputValue.value}</span><span class="close-tag">&#215</span>`;
      InputTag.dataType = "appareils";
      InputTag.classList.add("ustensils");
      tagContainer.appendChild(InputTag);
      document.querySelector(".close-tag").addEventListener("click", (e) => {
        InputTag.style.display = "none";
      });
    }
  });

  function autocompleteUstensileArray(ustensileArray) {
    UstensilesList.innerHTML = !ustensileArray.length
      ? ""
      : ustensileArray.join("");
  }
}

export default autocomplete;
