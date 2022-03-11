import recipes from "./data";

export const onSearch = (event) => {
  event.preventDefault();
  let storedRecipes = [];
  const searchValue = event.target.value.toLowerCase().trim(); // convert input value to lower case and trim
  const recipesFiltered = recipes.filter((recipe) => {
    const ingredients = recipe.ingredients.map(
      (ingredients) => ingredients.ingredient
    );

    if (recipe.name.includes(searchValue)) {
      storedRecipes.push(recipe);
      return storedRecipes;
    } else if (ingredients.includes(searchValue)) {
      storedRecipes.push(recipe);
      return storedRecipes;
    } else if (recipe.description.includes(searchValue)) {
      storedRecipes.push(recipe);
      return storedRecipes;
    }
  });
  console.log(recipesFiltered);
  return recipesFiltered;
};
