import recipes from "./data";
const ingredientDropdown = document.querySelector("#dropdown-1");
const appareilDropdown = document.querySelector("#dropdown-2");
const ustensilDropdown = document.querySelector("#dropdown-3");
let allAppareil = [];
let allIngredients = [];
let allUstensils = [];

function showDropdown() {
  const allElements = recipes.filter((recipe) => {
    const ingredientsInput = document.querySelector("#selected-ingredients");
    const appareilInput = document.querySelector("#selected-appareils");
    const ustensilsInput = document.querySelector("#selected-ustensils");

    //<<<<< ==== All ingredients ==== >>>>> :
    recipe.ingredients.map((ingredient) => {
      allIngredients.push(ingredient.ingredient.toLowerCase());
    });
    // Filtered Ingredients (no repeat ingredients)
    const filteredIngredients = allIngredients.filter(function (ele, pos) {
      return allIngredients.indexOf(ele) == pos;
    });
    function showIngredientList() {
      ingredientsInput.innerHTML = filteredIngredients.join(", ");
      appareilInput.innerHTML = "";
      ustensilsInput.innerHTML = "";
    }
    ingredientDropdown.addEventListener("click", showIngredientList);

    //<<<<<<<< ==== All Appliances ==== >>>>>>>> ：
    allAppareil.push(recipe.appliance.toLowerCase());
    // Filtered Appareils (no repeat item):
    const filteredAppareil = allAppareil.filter(function (ele, pos) {
      return allAppareil.indexOf(ele) == pos;
    });
    function showAppareilList() {
      appareilInput.innerHTML = filteredAppareil.join(", ");
      ingredientsInput.innerHTML = "";
      ustensilsInput.innerHTML = "";
    }
    appareilDropdown.addEventListener("click", showAppareilList);

    //<<<<< ===== All ustensils ===== >>>>> :
    recipe.ustensils.map((item) => {
      allUstensils.push(item.toLowerCase());
    });
    // Filtered Ustensils (no repeat ustensils):
    const filteredUstensils = allUstensils.filter(function (ele, pos) {
      return allUstensils.indexOf(ele) === pos;
    });
    function showUstensilsList() {
      ustensilsInput.innerHTML = filteredUstensils.join(", ");
      ingredientsInput.innerHTML = "";
      appareilInput.innerHTML = "";
    }
    ustensilDropdown.addEventListener("click", showUstensilsList);
  });
}

export default showDropdown;

/*
Brouillon : 

`<li class ="element">${filteredAppareil}</li>`;

function showIngredientList() {
  ingredientsInput.innerHTML = filteredIngredients.join(" ");
}
ingredientDropdown.addEventListener("click", showIngredientList);

function showAppareilList() {
  appareilInput.innerHTML = allAppareil.join(" ");
}
appareilDropdown.addEventListener("click", showAppareilList);

function showUstensilsList() {
  ustensilsInput.innerHTML = allUstensils.join(" ");
}
ustensilDropdown.addEventListener("click", showUstensilsList);


*/

/*
    const appliances = recipe.appliance;
    const ingredients = recipe.ingredients.map(
      (ingredients) => ingredients.ingredient
    );
    const ustensils = recipe.ustensils;

*/

/*

  let noRepeatAppareils = [];
    recipes.map((recipe) => {
      noRepeatAppareils.push(appliances);
    });
    console.log(noRepeatAppareils);


let noRepeatAppareils = [];
    noRepeatAppareils = recipes
      .map(function (recipe, index) {
        return appliances;
      })
      .join(", ");
    console.log(noRepeatAppareils);

 let noRepeatIngredients = [];

  let noRepeatUstensils = [];
 function filterByAppliances(recipes, recipeCard) {
    
    for (let i = 0; i < recipeCard.length; i++) {
      noRepeatAppareils.push(
        recipes.find((item) => (item.appliance = appliances[i]))
      );
    }
    console.log(noRepeatAppareils);
    return noRepeatAppareils;
  }

const allNames = recipes.map((recipe) => recipe.name);

  const allIngredients = recipes.map((recipe) => {
    const ingredients = recipe.ingredients.map(
      (ingredients) => ingredients.ingredient
    );
   
  });

   ingredientsInput.innerHTML = allNames;

const searchValue = document.getElementById("searchbar").value.toUpperCase();
 const filteredIngredients = allIngredients.map(
    (ingredient) => ingredient.value == searchValue
  );

 ingredientsInput.innerHTML = allName;
  console.log(allName);
  console.log(filteredIngredients);
  console.log(ingredientsInput);

  //console.log(appliances);
    //console.log(ingredients);
    //console.log(ustensils);

    //console.log(typeof appliances);
    //console.log(recipeCard);
    //console.log(typeof recipeCard);
*/
