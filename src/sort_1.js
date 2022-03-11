import recipes from "./data";
/*
1. La recherche principale se lance à partir de 3 caractères entrés par l’utilisateur dans la
barre de recherche;
2. La recherche s’actualise pour chaque nouveau caractère entré;
3. La recherche principale affiche les premiers résultats le plus rapidement possible;
*/
/*
export const onSearch = (event) => {
  console.log(" ====== OnSearch ========");
  console.log(event.target.value); // Valeur ecrite pas le user
  const searchValue = event.target.value;
  const storeValue = document.getElementById("cards");
  const recipeCard = document.querySelectorAll(".recipeCard");
  const recipeName = document.querySelectorAll(".recipe-name");
  const recipeIngredient = document.querySelectorAll(".ingredients");
  const recipeDescription = document.querySelectorAll(".description")

  const recipesFiltered = recipes.filter((recipe) =>
    recipe.name.includes(searchValue)
  );

  console.log(recipesFiltered);
};
*/
/* TODO En plus du filtre faut rajouter par ingredient et par description  */

// Exemple : coco ou Coco
// Limonade de Coco
//Poisson Cru à la tahitienne
// Poulet coco réunionnais
