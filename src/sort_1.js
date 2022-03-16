import recipes from "./data";

export const onSearch = (event) => {
  event.preventDefault();
  const searchValue = event.target.value.toLowerCase().trim(); // convert input value to lower case and trim
  const cards = document.getElementById("cards");
  const recipeCard = document.querySelectorAll(".recipeCard");
  let recipeWrapper = [];

  const filteredRecipes = recipes.filter((recipe) => {
    const name = recipe.name;
    const ingredients = recipe.ingredients.map(
      (ingredients) => ingredients.ingredient
    );
    const description = recipe.description;

    const filteded =
      name.includes(searchValue) ||
      ingredients.includes(searchValue) ||
      description.includes(searchValue);

    if (filteded) recipeWrapper.push(recipe);
    //recipeCard.classList.toggle("hide", !filteded);
  });

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
};
