import recipes from "./data";

export const inSearch = () => {
  const searchValue = document.getElementById("searchbar").value.toUpperCase();
  const storedValue = document.getElementById("cards");
  const recipeCard = document.querySelectorAll(".recipeCard");
  const name = storedValue.querySelectorAll(".recipe-name");
  const ingredient = storedValue.getElementsByTagName(
    ".ingredients-quantity span"
  );
  const description = storedValue.getElementsByTagName("p");

  // match to recipe name:
  for (let i = 0; i < name.length; i++) {
    let isName = recipeCard[i].querySelectorAll(".recipe-name")[0];
    if (isName) {
      let nameValue = isName.textContent || isName.innerHTML;
      if (nameValue.toUpperCase().indexOf(searchValue) > -1) {
        recipeCard[i].style.display = "";
      } else {
        recipeCard[i].style.display = "none";
      }
    }
  }

  // match to ingredients:
  for (let j = 0; j < ingredient.length; j++) {
    let isIngredient = recipeCard[j].querySelectorAll(
      ".ingredients-quantity span"
    )[0];
    if (isIngredient) {
      let ingredientValue = isIngredient.textContent || isIngredient.innerHTML;
      if (ingredientValue.toUpperCase().indexOf(searchValue) > -1) {
        recipeCard[j].style.display = "";
      } else {
        recipeCard[j].style.display = "none";
      }
    }
  }

  // match to description:
  for (let y = 0; y < description.length; y++) {
    let isDescription = recipeCard[y].querySelectorAll(".description")[0];
    if (isDescription) {
      let descriptionValue =
        isDescription.textContent || isDescription.innerHTML;
      if (descriptionValue.toUpperCase().indexOf(searchValue) > -1) {
        recipeCard[y].style.display = "";
      } else {
        recipeCard[y].style.display = "none";
      }
    }
  }
};
