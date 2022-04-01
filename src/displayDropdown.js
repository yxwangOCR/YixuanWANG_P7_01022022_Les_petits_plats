import recipes from "./data";
import displayTags from "./displayTags";
import autocomplete from "./autocompleteSearch";

let allAppareil = [];
let allIngredients = [];
let allUstensils = [];

function displayDropdown() {
  const ingredientDropdown = document.getElementById("dropdown-1");
  const appareilDropdown = document.getElementById("dropdown-2");
  const ustensilDropdown = document.getElementById("dropdown-3");
  const ingredientsInput = document.querySelector("#selected-ingredients");
  const appareilInput = document.querySelector("#selected-appareils");
  const ustensilesInput = document.querySelector("#selected-ustensiles");

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
    for (let value of filteredIngredients.sort()) {
      let li = document.createElement("li");
      li.className = "element dropdown-item";
      li.innerHTML = value;
      li.dataType = "ingredient";
      ingredientsInput.appendChild(li);
      li.addEventListener("click", displayTags);
    }
    ingredientsInput.classList.toggle("show");
    appareilInput.classList.remove("show");
    ustensilesInput.classList.remove("show");
  }
  ingredientDropdown.addEventListener("click", showIngredientList);

  // Filtered Appareils (no repeat item):
  const filteredAppareil = allAppareil.filter(function (ele, pos) {
    return allAppareil.indexOf(ele) == pos;
  });
  function showAppareilList() {
    appareilInput.innerHTML = "";
    for (let value of filteredAppareil.sort()) {
      let li = document.createElement("li");
      li.className = "element dropdown-item";
      li.innerHTML = value;
      li.dataType = "appareils";
      appareilInput.appendChild(li);
      li.addEventListener("click", displayTags);
    }
    appareilInput.classList.toggle("show");
    ingredientsInput.classList.remove("show");
    ustensilesInput.classList.remove("show");
  }
  appareilDropdown.addEventListener("click", showAppareilList);

  // Filtered Ustensils (no repeat ustensils):
  const filteredUstensils = allUstensils.filter(function (ele, pos) {
    return allUstensils.indexOf(ele) === pos;
  });
  function showUstensilsList() {
    ustensilesInput.innerHTML = "";
    for (let value of filteredUstensils.sort()) {
      let li = document.createElement("li");
      li.className = "element dropdown-item";
      li.innerHTML = value;
      li.dataType = "ustensils";
      ustensilesInput.appendChild(li);
      li.addEventListener("click", displayTags);
    }
    ustensilesInput.classList.toggle("show");
    ingredientsInput.classList.remove("show");
    appareilInput.classList.remove("show");
  }
  ustensilDropdown.addEventListener("click", showUstensilsList);

  autocomplete();
}

// Close the dropdown if the user clicks outside of it:
document.addEventListener("click", function (e) {
  if (
    !e.target.matches("#ingredients-input, #appareils-input, #ustensiles-input")
  ) {
    let dropdowns = document.querySelectorAll(".dropdown-menu");

    for (let dropdown of dropdowns) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    }
  } else if (e.target.matches("#ingredients-input")) {
    document.getElementById("ingredients-input").classList.toggle("show");
  } else if (e.target.matches("#appareils-input")) {
    document.getElementById("appareils-input").classList.toggle("show");
  } else if (e.target.matches("#ustensiles-input")) {
    document.getElementById("ustensiles-input").classList.toggle("show");
  } else {
    console.log("click other place");
  }
});

export default displayDropdown;
