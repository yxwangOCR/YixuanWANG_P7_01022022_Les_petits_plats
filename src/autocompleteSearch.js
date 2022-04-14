import recipes from "./data";
import createTags from "./createTags";
import displayTags from "./displayTags";
import filterTag from "./filterTag";
import displayDropdown from "./displayDropdown";

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
        (ingredient) =>
          `<li class = "element dropdown-item ingredient>${ingredient}</li>`
      );
      autocompleteIngredientArray(ingredientArray);
    }

    if (e.key === "Enter") {
      const tags = document.querySelector(".tags");
      const ingredientInputValue = document.getElementById("ingredients-input");
      const value = ingredientInputValue.value;
      const tagValue = createTags(value, "ingredient");
      tags.appendChild(tagValue);
      filterTag();
    }
    const clickValue = document.querySelector(".dropdown-item");
    clickValue.dataType = "ingredient";
    clickValue.addEventListener("click", displayTags, false);
    clickValue.addEventListener("click", filterTag, false);
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
      appareilArray = appareilArray.map(
        (appareil) =>
          `<li class = "element dropdown-item appareils>${appareil}</li>`
      );
      autocompleteAppareilArray(appareilArray);
    }
    if (e.key === "Enter") {
      const tags = document.querySelector(".tags");
      const appareilInputValue = document.getElementById("appareils-input");
      const value = appareilInputValue.value;
      const tagValue = createTags(value, "appareils");
      tags.appendChild(tagValue);
      filterTag();
    }
    const clickValue = document.querySelector(".dropdown-item");
    clickValue.dataType = "appareils";
    clickValue.addEventListener("click", displayTags, false);
    clickValue.addEventListener("click", filterTag, false);
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
        (ustensile) =>
          `<li class = "element dropdown-item ustensils>${ustensile}</li>`
      );

      autocompleteUstensileArray(ustensileArray);
    }
    if (e.key === "Enter") {
      const tags = document.querySelector(".tags");
      const ustensilInputValue = document.getElementById("ustensiles-input");
      const value = ustensilInputValue.value;
      const tagValue = createTags(value, "ustensils");
      tags.appendChild(tagValue);
      filterTag();
    }
    const clickValue = document.querySelector(".dropdown-item");
    clickValue.dataType = "ustensils";
    clickValue.addEventListener("click", displayTags, false);
    clickValue.addEventListener("click", filterTag, false);
  });

  function autocompleteUstensileArray(ustensileArray) {
    UstensilesList.innerHTML = !ustensileArray.length
      ? ""
      : ustensileArray.join("");
  }
}

export default autocomplete;
