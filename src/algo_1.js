import recipes from "./data";

export const onSearch = (event) => {
  event.preventDefault();
  const searchValue = event.target.value.toLowerCase().trim(); // convert input value to lower case and trim
  let recipeWrapper = [];

  const name = (recipes, searchValue) =>
    recipes.filter((recipe) => recipe.name.includes(searchValue));

  const ingredients = (recipes, searchValue) =>
    recipes.filter((recipe) =>
      recipe.ingredients
        .map((ingredients) => ingredients.ingredient)
        .includes(searchValue)
    );

  const description = (recipes, searchValue) =>
    recipes.filter((recipe) => recipe.description.includes(searchValue));

  console.log(searchValue);
  //console.log(name);
  //console.log(ingredients);
  //console.log(description);

  console.log(name(recipes, searchValue));
  console.log(ingredients(recipes, searchValue));
  console.log(description(recipes, searchValue));
  recipeWrapper.push(searchValue);
  console.log(recipeWrapper);
};

/*

 recipes.filter((recipe) => {
    const name = (recipe, searchValue) => recipe.name.includes(searchValue);
    const ingredients = (recipe, searchValue) =>
      recipe.ingredients
        .map((ingredients) => ingredients.ingredient)
        .includes(searchValue);
    const description = (recipe, searchValue) =>
      recipe.description.includes(searchValue);

    console.log(searchValue);
    console.log(name);
    console.log(ingredients);
    console.log(description);

    recipeWrapper.push(recipe);
    console.log(recipeWrapper);
  });


 const filteded =
      name.includes(searchValue) ||
      ingredients.includes(searchValue) ||
      description.includes(searchValue);

const cards = document.getElementById("cards");
function displayRecipes(recipes) {
  cards.innerHTML = "";
}

 recipeWrapper.forEach((recipeCard) => {
    //console.log(recipeCard);
    //cards.innerHTML = "";
    cards.append(recipeCard);
    //console.log(cards);
  });

  //console.log(recipeWrapper);
  //console.log(typeof recipeWrapper);

  //cards.innerHTML = `${recipeWrapper}`;
  //cards.append(recipeWrapper);
*/
