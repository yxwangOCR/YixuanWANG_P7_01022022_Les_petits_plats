import initialRecipe from "./data";

function filterTag() {
  const recipeCard = document.querySelectorAll(".recipeCard");
  const tags = document.querySelectorAll(".tag");
  const tagsValue = {
    ingredient: [],
    appareils: [],
    ustensils: [],
  };

  const displayedRecipe = Array.from(recipeCard).reduce((acc, card) => {
    if (card.style.display !== "none") {
      acc.push(initialRecipe.find((recipe) => recipe.id == card.id));
    }
    return acc;
  }, []);
  //console.log(displayedRecipe);

  let filteredRecipes = [];
  for (const tag of Array.from(tags)) {
    let tagValueString = tag.querySelectorAll(".tag-value")[0].innerHTML;
    let tagType = tag.dataset.type;
    tagsValue[tagType].push(tagValueString);
  }

  /** ==========Filter by value ========= */
  filteredRecipes = displayedRecipe.filter((recipe) => {
    const ingredients = recipe.ingredients.map((ingredients) =>
      ingredients.ingredient.toLowerCase()
    );
    const appareils = recipe.appliance.toLowerCase();
    const ustensils = recipe.ustensils.map((ustensils) =>
      ustensils.toLowerCase()
    );
    return (
      // verifier si tag du type proposé inclue dans la recette:
      //annuler les autres recettes et afficher uniquement les recettes qui repondent aux toutes les conditions avec ces tags:
      (tagsValue.ingredient.length > 0
        ? tagsValue.ingredient.some((tag) => ingredients.includes(tag))
        : true) &&
      (tagsValue.appareils.length > 0
        ? tagsValue.appareils.some((tag) => appareils.includes(tag))
        : true) &&
      (tagsValue.ustensils.length > 0
        ? tagsValue.ustensils.some((tag) => ustensils.includes(tag))
        : true)
    );
  });

  const filteredRecipesId = filteredRecipes.map((recipe) => recipe.id);

  /** ========== Display results ========= */

  for (const recipe of displayedRecipe) {
    const card = document.getElementById(recipe.id);
    // recupere la carte qui associe a id de la recette

    if (!filteredRecipesId.includes(recipe.id)) {
      // si id n'est pas dans les recettes filtered
      card.classList.add("tag-hidden");
    } else {
      card.classList.remove("tag-hidden");
    }
  }
}

export default filterTag;
