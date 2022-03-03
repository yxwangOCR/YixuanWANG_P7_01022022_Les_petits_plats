/*
1. La recherche principale se lance à partir de 3 caractères entrés par l’utilisateur dans la
barre de recherche;
2. La recherche s’actualise pour chaque nouveau caractère entré;
3. La recherche principale affiche les premiers résultats le plus rapidement possible;
*/

let upperWord = [];
let lowerWord = [];
let keyWord = recipes[0]; // recipe name key work value

function simpleSort(recipes) {
  if (recipes.length < 3) return recipes;
  // sort by recipts name:
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name > keyWord.name) {
      upperWord.push(recipes[i]);
    } else lowerWord.push(recipes[i]);
  }
  return upperWord.concat(keyWord).concat(lowerWord);
}
