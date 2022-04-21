//import recipes from "./data";

export const inSearch = () => {
  const searchText = document.getElementById("searchbar").value.toUpperCase(); // convert to uppercase
  const recipeCard = document.querySelectorAll(".recipeCard");

  for (let i = 0; i < recipeCard.length; i++) {
    let isName = recipeCard[i].querySelectorAll(".recipe-name")[0];
    let nameValue = isName.textContent || isName.innerHTML;

    let isDescription = recipeCard[i].querySelectorAll(".description")[0];
    let descriptionValue = isDescription.textContent || isDescription.innerHTML;

    let isIngredient = recipeCard[i].querySelectorAll(
      ".ingredients-quantity span"
    )[0];
    let ingredientValue = isIngredient.textContent || isIngredient.innerHTML;

    if (nameValue.toUpperCase().indexOf(searchText) > -1) {
      recipeCard[i].style.display = "";
    } else if (descriptionValue.toUpperCase().indexOf(searchText) > -1) {
      recipeCard[i].style.display = "";
    } else if (ingredientValue.toUpperCase().indexOf(searchText) > -1) {
      recipeCard[i].style.display = "";
    } else {
      recipeCard[i].style.display = "none";
    }
  }
};
