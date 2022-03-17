import recipes from "./data";

export const inSearch = () => {
  const searchText = document.getElementById("searchbar").value.toUpperCase(); // convert to uppercase
  const storedValue = document.getElementById("cards");
  const recipeCard = document.querySelectorAll(".recipeCard");
  const name = storedValue.querySelectorAll(".recipe-name");
  const ingredient = storedValue.getElementsByTagName(
    ".ingredients-quantity span"
  );
  const description = storedValue.getElementsByTagName("p");

  for (let i = 0; i < recipeCard.length; i++) {
    let isName = recipeCard[i].querySelectorAll(".recipe-name")[0];
    let nameValue = isName.textContent || isName.innerHTML;
    if (nameValue.toUpperCase().indexOf(searchText) > -1) {
      recipeCard[i].style.display = "";
    } else {
      recipeCard[i].style.display = "none";
    }

    let isDescription = recipeCard[i].querySelectorAll(".description")[0];
    let descriptionValue = isDescription.textContent || isDescription.innerHTML;
    if (descriptionValue.toUpperCase().indexOf(searchText) > -1) {
      recipeCard[i].style.display = "";
    } else {
      recipeCard[i].style.display = "none";
    }

    let isIngredient = recipeCard[j].querySelectorAll(
      ".ingredients-quantity span"
    )[0];
    let ingredientValue = isIngredient.textContent || isIngredient.innerHTML;
    if (ingredientValue.toUpperCase().indexOf(searchText) > -1) {
      recipeCard[j].style.display = "";
    } else {
      recipeCard[j].style.display = "none";
    }
  }
};
