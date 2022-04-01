import initialRecipe from "./data";


function filterTag(value, type) {
  const recipeCard = document.querySelectorAll(".recipeCard");
  const tags = document.querySelectorAll(".tag");

  const tagsValue = {
    ingredient: [],
    appareils: [],
    ustensils: [],
  }

  const displayedRecipe = Array.from(recipeCard).reduce((acc, card) => {
    if(card.style.display !== "none") {
      acc.push(initialRecipe.find(recipe => recipe.id == card.id))
    }

    return acc;
  }, []);


  for (const tag of Array.from(tags)) {
    let tagString = tag.querySelectorAll(".tag-value")[0].innerHTML;
    let tagType = tag.dataset.type;

    //tagsValue[tagType].push(tagString)
  }

  //console.log(tagsValue)




  /** ==========Filter by value ========= */


  const filteredRecipes = displayedRecipe.filter((recipe) => {
    const ingredients = recipe.ingredients.map(
        (ingredients) => ingredients.ingredient.toLowerCase()
    );

    return tagsValue.ingredient.some(tag => ingredients.includes(tag))
  } )

  //console.log(filteredRecipes)



  /** ========== Display results ========= */
  /* const displayedCard = Array.from(recipeCard).filter((card) => {
    console.log(card);
    card.style.display !== "none";
  }); */


}

export default filterTag;
