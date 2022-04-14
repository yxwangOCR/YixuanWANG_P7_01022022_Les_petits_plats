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

  for (const tag of Array.from(tags)) {
    let tagValueString = tag.querySelectorAll(".tag-value")[0].innerHTML;
    let tagType = tag.dataset.type;
    tagsValue[tagType].push(tagValueString);
    console.log(tagsValue);

    /** ==========Filter by value ========= */
    const filteredRecipes = displayedRecipe.filter((recipe) => {
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

    console.log(filteredRecipes); // filtered recipes object
  }

  /** ========== Display results ========= */
  const displayedCard = Array.from(recipeCard).filter((card) => {
    //console.log(card);
    card.style.display !== "none"; // show 50 recipes cards
  });
}

export default filterTag;
