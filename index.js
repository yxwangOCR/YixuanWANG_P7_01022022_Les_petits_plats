const cardsSection = document.querySelector(".cards");
const recipesLength = recipes.length;
let recipeId = [];
let recipeName = [];
let recipeIngredients = [];
let recipeTime = [];
let recipeCards = [];

for (var i = 0; i < recipes.length; i++) {
  recipeId.push(recipes[i].id);
  recipeName.push(recipes[i].name);
  recipeIngredients.push(recipes[i].ingredients);
  recipeTime.push(recipes[i].time);
  console.log(recipes[i].name);
}

console.log(Object.values(Object.values([recipes[0].id])));
console.log(Object.values(recipes[1]));
console.log(recipes.length);
console.log(recipes[0].name);
console.log(Array.from(recipes));
console.log(recipeId);
console.log(recipeName);
console.log(recipeName[0]);
console.log(recipeIngredients);
console.log(recipeIngredients[0]);
console.log(recipeTime);

/*
function getRecipes() {
  fetch("./recipes.js").then(() => {
    recipeCards = recipes.filter((recipes) => recipes.id === +recipeId);
    return recipeCards;
  });
}
console.log(recipeCards);
getRecipes();
function displayCards(recipes) {
  recipes.forEach((recipe) => {
    cardsSection.appendChild(cardsFactory(recipe).cardsDOM());
  });
}
displayCards(recipes);
*/
