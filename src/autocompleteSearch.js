import recipes from "./data";
import displayTags from "./displayTags";
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

  // Enter key words in ingredients input:
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
      console.log(ingredientArray);
      showIngredientList();
    }
    if (e.key === "Enter") {
     

      displayTags(e);
   
    }
  });

  function autocompleteIngredientArray(ingredientArray) {
    IngredientsList.innerHTML = !ingredientArray.length
      ? ""
      : ingredientArray.join("");
  }

  // Enter key words in appareils input:
  const filteredAppareil = allAppareil.filter(function (ele, pos) {
    return allAppareil.indexOf(ele) == pos;
  });
  appareilsInput.addEventListener("keyup", function (e) {
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
      displayTags(e);
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
      displayTags(e);
    }
  });

  function autocompleteUstensileArray(ustensileArray) {
    UstensilesList.innerHTML = !ustensileArray.length
      ? ""
      : ustensileArray.join("");
  }
}

export default autocomplete;
