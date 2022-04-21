import recipes from "./data";
import createRecipes from "./createRecipes";

const filterByName = (recipes, filtre) =>
  recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(filtre.toLowerCase())
  );

const filterByIngredient = (recipes, filtre) =>
  recipes.filter((recipe) =>
    recipe.ingredients.find((ingredient) =>
      ingredient.ingredient.toLowerCase().includes(filtre.toLowerCase())
    )
  );

/*
const getUnique = (arr, key) => [
  ...new Map(arr.map((item) => [item[key], item])).value(),
];
Message erreur ==> Uncaught TypeError: Map.value is not a function or its return value is not iterable
*/

function getUnique(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

export const onSearch = (event) => {
  event.preventDefault();
  const searchValue = event.target.value.toLowerCase().trim(); // convert input value to lower case and trim
  let searchRecipe = [];

  const resultByName = filterByName(recipes, searchValue);
  const resultByIngredient = filterByIngredient(recipes, searchValue);

  searchRecipe = getUnique(
    resultByName.concat(resultByIngredient, resultByName),
    (key = "id")
  );
  createRecipes(searchRecipe);
};
