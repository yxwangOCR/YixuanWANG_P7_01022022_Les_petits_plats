import recipes from "./data";
/*
1. La recherche principale se lance à partir de 3 caractères entrés par l’utilisateur dans la
barre de recherche;
2. La recherche s’actualise pour chaque nouveau caractère entré;
3. La recherche principale affiche les premiers résultats le plus rapidement possible;
*/


export const onSearch = (event) => {
  console.log(' ====== OnSearch ========')
  console.log(event.target.value) // Valeur ecrite pas le user
  const searchValue = event.target.value

  const recipesFiltered =  recipes.filter(recipe => recipe.name.includes(searchValue))
/* TODO En plus du filtre faut rajouter par ingredient et par description  */



  // Exemple : coco ou Coco
  // Limonade de Coco
  //Poisson Cru à la tahitienne
  // Poulet coco réunionnais

console.log(recipesFiltered)
}



/*
let upperLetters = [];
let lowerLetters = [];
let keyLetter = recipes[0]; // recipe name key work value

function simpleSort(recipes) {
  if (recipes.length < 3) return recipes;
  // sort by recipts name:
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name > keyLetter.name) {
      upperLetters.push(recipes[i]);
    } else lowerLetters.push(recipes[i]);
  }
  return upperLetters.concat(keyLetter).concat(lowerLetters);
}
*/
