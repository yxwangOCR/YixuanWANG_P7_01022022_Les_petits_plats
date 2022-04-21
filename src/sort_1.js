/*import recipes from "./data";
import createRecipes from "./createRecipes";

export const onSearch = (event) => {
  event.preventDefault();
  const searchValue = event.target.value.toLowerCase().trim(); // convert input value to lower case and trim
  const cards = document.getElementById("cards");
  //const recipeCard = document.querySelectorAll(".recipeCard")[0];
  let recipeWrapper = [];

  const filteredRecipes = recipes.filter((recipe) => {
    const name = recipe.name;
    const ingredients = recipe.ingredients.map(
      (ingredients) => ingredients.ingredient
    );
    const description = recipe.description;

    recipeWrapper.push(name.includes(searchValue));
    return recipeWrapper;
  });
  console.log(filteredRecipes);
  cards.append(recipeWrapper);
};
*/
