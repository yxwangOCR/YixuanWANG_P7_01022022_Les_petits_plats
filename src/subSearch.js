import recipes from "./data";
import displayTags from "./displayTags";

const ingredientDropdown = document.querySelector("#dropdown-1");
const appareilDropdown = document.querySelector("#dropdown-2");
const ustensilDropdown = document.querySelector("#dropdown-3");
let allAppareil = [];
let allIngredients = [];
let allUstensils = [];


function showDropdown() {
  const ingredientsInput = document.querySelector("#selected-ingredients");
  const appareilInput = document.querySelector("#selected-appareils");
  const ustensilsInput = document.querySelector("#selected-ustensils");

  recipes.filter((recipe) => {
    recipe.ingredients.map((ingredient) => {
      allIngredients.push(ingredient.ingredient.toLowerCase());
    });
    allAppareil.push(recipe.appliance.toLowerCase());
    recipe.ustensils.map((item) => {
      allUstensils.push(item.toLowerCase());
    });
  });

  // Filtered Ingredients (no repeat ingredients)
  const filteredIngredients = allIngredients.filter(function (ele, pos) {
    return allIngredients.indexOf(ele) == pos;
  });

  function showIngredientList() {
    ingredientsInput.innerHTML = "";
    for (let value of filteredIngredients) {
      let li = document.createElement("li");
      li.className = "element dropdown-item";
      li.innerHTML = value;
      li.dataType = "ingredient";
      ingredientsInput.appendChild(li);
      li.addEventListener("click", displayTags);
    }
    appareilInput.innerHTML = "";
    ustensilsInput.innerHTML = "";
  }
  ingredientDropdown.addEventListener("click", showIngredientList);
  

  // Filtered Appareils (no repeat item):
  const filteredAppareil = allAppareil.filter(function (ele, pos) {
    return allAppareil.indexOf(ele) == pos;
  });
  function showAppareilList() {
    appareilInput.innerHTML = "";
    for (let value of filteredAppareil) {
      let li = document.createElement("li");
      li.className = "element dropdown-item";
      li.innerHTML = value;
      li.dataType = "appareils";
      appareilInput.appendChild(li);
      li.addEventListener("click", displayTags);
    }
    ingredientsInput.innerHTML = "";
    ustensilsInput.innerHTML = "";
  }
  appareilDropdown.addEventListener("click", showAppareilList);

  // Filtered Ustensils (no repeat ustensils):
  const filteredUstensils = allUstensils.filter(function (ele, pos) {
    return allUstensils.indexOf(ele) === pos;
  });
  function showUstensilsList() {
    ustensilsInput.innerHTML = "";

    for (let value of filteredUstensils) {
      let li = document.createElement("li");
      li.className = "element dropdown-item";
      li.innerHTML = value;
      li.dataType = "ustensils";
      ustensilsInput.appendChild(li);
      li.addEventListener("click", displayTags);
    }
    ingredientsInput.innerHTML = "";
    appareilInput.innerHTML = "";
  }
  ustensilDropdown.addEventListener("click", showUstensilsList);
}

export default showDropdown;
